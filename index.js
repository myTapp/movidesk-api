const axios = require('axios');

let prepareError = (e, obj) => {
	if (e.error) {
		return e
	} else if (e.isAxiosError && e.code) {
		let ret = {}
		switch (e.code) {
			case 'ECONNABORTED':
			case 'ETIMEDOUT':
				ret = {
					type: "connection",
					success: false,
					error: `Connection timeout (${obj.options.timeout}ms)`
				}
				break;
		}
		return ret;
	} else if (e.response) {
		return {
			type: "request",
			success: false,
			error: (({ status, statusText, data }) => ({ status, statusText, data }))(e.response),
		}
	} else if (e.request) {
		return {
			type: "request",
			success: false,
			error: e.request
		}
	} else {
		return {
			type: "request",
			success: false,
			error: e || ""
		}
	}
}

let prepareData = (data, obj) => {
	let ret = {
		success = true,
		data = {}
	}
	if (data) {
		ret.data = data
	}
}

module.exports = class Movidesk {

	constructor(data = {}) {

		this.options = Object.assign({}, data);

		if ( !this.options.token ) {
			throw new Error('Token must be passed!');
		}

		this.movapi = axios.create({
			baseURL: this.options.base_url || "https://api.movidesk.com/public/v1",
			timeout: this.options.timeout || 3000
		});

	}

	getPerson(data = {}) {

		return new Promise((resolve, reject) => {
			
			let params = {
				token: this.options.token
			};

			Object.assign(params, data);
			
			this.movapi.get('/persons', { params })
			.then(res => {
				resolve(prepareData(res.data));
			})
			.catch(e => {
				reject(prepareError(e, this));
			})

		})

	}

	createPerson(data = {}) {

		return new Promise((resolve, reject) => {

			let person = {
				isActive: true,
				personType: 1,
				profileType: 2
			};

			Object.assign(person, data);
			
			this.movapi.post('/persons', person, {
				params: {
					token: this.options.token,
					returnAllProperties: false
				}
			})
			.then(res => {
				resolve(prepareData(res.data));
			})
			.catch(e => {
				reject(prepareError(e, this));
			})

		})

	}

	updatePerson(data = {}) {

		return new Promise((resolve, reject) => {

			let person = {};

			Object.assign(person, data);

			this.movapi.patch('/persons', person, {
				params: {
					token: this.options.token,
					returnAllProperties: false,
					id: person.id
				}
			})
			.then(res => {
				resolve(prepareData(res.data));
			})
			.catch(e => {
				reject(prepareError(e, this));
			})

		})

	}

	deletePerson(data = {}) {

		return new Promise((resolve, reject) => {
			
			let params = {
				token: this.options.token
			};

			Object.assign(params, data);
			
			this.movapi.delete('/persons', { params })
			.then(res => {
				resolve(prepareData(res.data));
			})
			.catch(e => {
				reject(prepareError(e, this));
			})

		})

	}

	pushAssetsPerson(data = {}) {

		return new Promise((resolve, reject) => {

			let person = Object.assign({}, data);

			this.getPerson({
				id: person.id
			})
			.then((res) => {
				res.atAssets = res.atAssets.concat(person.atAssets)
				return this.updatePerson({
					id: res.id,
					atAssets: res.atAssets
				})
			})
			.then((res) => {
				resolve(res);
			})
			.catch(e => {
				reject(prepareError(e, this));
			})

		})

	}

	getTicket(data = {}) {

		return new Promise((resolve, reject) => {
			
			let params = {
				token: this.options.token
			};

			Object.assign(params, data);
			
			this.movapi.get('/tickets', { params })
			.then(res => {
				resolve(prepareData(res.data));
			})
			.catch(e => {
				reject(prepareError(e, this));
			})

		})


	}

	createTicket(data = {}) {

		return new Promise((resolve, reject) => {

			let ticket = {
				type: 2,
				subject: "Ticket",
				justification: "",
				actions: [
					{
						type: 2,
						description: "Ticket automático"
					}
				]
			};

			Object.assign(ticket, data);
			
			this.movapi.post('/tickets', ticket, {
				params: {
					token: this.options.token,
					returnAllProperties: false
				}
			})
			.then(res => {
				resolve(prepareData(res.data));
			})
			.catch(e => {
				reject(prepareError(e, this));
			})

		})

	}

	updateTicket(data = {}) {

		return new Promise((resolve, reject) => {

			let ticket = {};

			Object.assign(ticket, data);

			this.movapi.patch('/tickets', ticket, {
				params: {
					token: this.options.token,
					returnAllProperties: false,
					id: ticket.id
				}
			})
			.then(res => {
				resolve(prepareData(res.data));
			})
			.catch(e => {
				reject(prepareError(e, this));
			})

		})

	}

	pushActionsTicket(data = {}) {

		return new Promise((resolve, reject) => {

			let ticket = Object.assign({}, data);

			this.getTicket({
				id: ticket.id
			})
			.then((res) => {
				res.actions = res.actions.concat(ticket.actions)
				return this.updateTicket({
					id: res.id,
					actions: res.actions
				})
			})
			.then((res) => {
				resolve(res);
			})
			.catch(e => {
				reject(prepareError(e, this));
			})

		})

	}

}
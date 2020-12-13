# Movidesk API

Package voltado ao consumo de APIs do Help Desk e Service Desk Movidesk, permitindo a automação de processos. 

A classe Movidesk disponibilizada cria uma interface dispensando a necessidade da configuração de requisições ao servidor.

## APIs suportadas

- Pessoas

Quatro funções básicas cobrindo os protocolos disponibilizados (`GET` | `POST` | `PATCH` | `DELETE`), mais funções compostas.

[getPerson](#getPerson) `BASE`

[createPerson](#createPerson) `BASE`

[updatePerson](#updatePerson) `BASE`

[deletePerson](#deletePerson) `BASE`

[pushAssetsPerson](#pushAssetsPerson) `COMPOSTA`

- Tickets

Três funções básicas cobrindo os protocolos disponibilizados (`GET` | `POST` | `PATCH`), mais funções compostas.

[getTicket](#getTicket) `BASE`

[createTicket](#createTicket) `BASE`

[updateTicket](#updateTicket) `BASE`

[pushActionsTicket](#pushActionsTicket) `COMPOSTA`

# Getting started

## Instalação

```
npm i movidesk-api
```

## Iniciando o objeto
```
const Movidesk = require('movidesk')

var movidesk = new Movidesk({
	token: process.env.MOVIDESK_TOKEN || "my-token-here"
});
```

# Pessoas

Para a documentação completa dos parâmetros necessários, consulte a documentação:
https://atendimento.movidesk.com/kb/article/189/movidesk-person-api

## getPerson `BASE`

Retorna informações sobre um cadastro Pessoa. um parâmetro `ID` for passado, um único objeto será retornado. Do contrário um array de objetos será retornado.

A pesquisa pode utilizar um parâmetro `$filter`, que deverá utilizar uma query OData como string. 

### Exemplos:
```
movidesk.getPerson({
	id: 1472165153
})
```

```
movidesk.getPerson({
	$filter: "personType eq 2"
})
```

## createPerson `BASE`

## updatePerson `BASE`

## deletePerson `BASE`

## pushAssetsPerson `COMPOSTA`

# Tickets

Para a documentação completa dos parâmetros necessários, consulte a documentação:
https://atendimento.movidesk.com/kb/article/256/movidesk-ticket-api

## getTicket `BASE`

## createTicket `BASE`

## updateTicket `BASE`

## pushActionsTicket `COMPOSTA`

# Changelog

## 0.0.3

- Alteração no retorno de erro
- Documentação melhorada

## 0.0.2

- Documentação melhorada

## 0.0.1

- Versão inicial
- Classe 
# Movidesk API

Package voltado ao consumo de APIs do Help Desk e Service Desk Movidesk, permitindo a automação de processos. 

A classe Movidesk disponibilizada cria uma interface dispensando a necessidade da configuração de requisições ao servidor.

## APIs suportadas

- Pessoas

Quatro funções básicas cobrindo os protocolos disponibilizados (`GET` | `POST` | `PATCH` | `DELETE`), mais funções compostas.

[fetch](#fetch) `BASE`

[create](#create) `BASE`

[update](#update) `BASE`

[delete](#delete) `BASE`

[pushAssets](#pushAssets) `COMPOSTA`

- Tickets

Três funções básicas cobrindo os protocolos disponibilizados (`GET` | `POST` | `PATCH`), mais funções compostas.

[fetch](#fetch) `BASE`

[create](#create) `BASE`

[update](#update) `BASE`

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

Para o uso dos métodos desta api utilize chamadas como:
`movidesk.person.fetch()`

## fetch `BASE`

Retorna informações sobre um cadastro Pessoa. um parâmetro `ID` for passado, um único objeto será retornado. Do contrário um array de objetos será retornado.

A pesquisa pode utilizar um parâmetro `$filter`, que deverá utilizar uma query OData como string. 

### Exemplos:
```
movidesk.person.fetch({
	id: 1472165153
})
```

```
movidesk.person.fetch({
	$filter: "personType eq 2"
})
```

## create `BASE`

### Exemplos:
```
movidesk.person.create({
	businessName: "Pessoa teste"
})
```

## update `BASE`

## delete `BASE`

## pushAssets `COMPOSTA`

# Tickets

Para a documentação completa dos parâmetros necessários, consulte a documentação:
https://atendimento.movidesk.com/kb/article/256/movidesk-ticket-api

Para o uso dos métodos desta api utilize chamadas como:
`movidesk.ticket.fetch()`

## fetch `BASE`

## create `BASE`

## update `BASE`

# Changelog

## 0.2.1

- Tratamento de erros

## 0.2.0

- Breaking change: mudança nas chamadas
- Documentação

## 0.1.0

- Primeira versão proposta como estável

## 0.0.8

- Retorno de API

## 0.0.7

- Fix de digitação

## 0.0.6

- Melhor data handling

## 0.0.5

- Melhor detalhamento nos dados retornados

## 0.0.4

- Handling de timeout
- Documentação melhorada

## 0.0.3

- Alteração no retorno de erro
- Documentação melhorada

## 0.0.2

- Documentação melhorada

## 0.0.1

- Versão inicial
- Classe 
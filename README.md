# Sistema de Gerenciamento de Funcionários

Sistema de gerenciamento de funcionários desenvolvido como projeto de estudo para aprofundar conhecimentos em desenvolvimento Full Stack, aplicando boas práticas de arquitetura, construção de APIs REST e integração entre frontend e backend.

## 📋 Sobre o projeto

A aplicação permite realizar o gerenciamento completo de funcionários através de operações CRUD:

* **Create** — Cadastro de funcionários
* **Read** — Listagem de funcionários
* **Update** — Atualização de dados
* **Delete** — Exclusão de funcionários

O projeto foi desenvolvido com separação entre frontend e backend, utilizando uma API REST construída com Fastify e persistência dos dados em PostgreSQL.

## 🚀 Tecnologias utilizadas

### Backend

* Node.js
* TypeScript
* Fastify
* PostgreSQL
* JWT para autenticação
* Docker

### Frontend

* Angular
* TypeScript
* Reactive Forms
* Integração com API REST

## ✨ Funcionalidades

* Login com autenticação via JWT
* Controle de acesso por roles
* Listagem de funcionários
* Cadastro de funcionários
* Edição de funcionários
* Exclusão de funcionários
* Integração entre Angular e Fastify
* Persistência em PostgreSQL
* API REST
* Ambiente Dockerizado

## 🐳 Executando com Docker

Na pasta `backend`, execute:

```bash
docker compose up -d
```

O backend ficará disponível em:

```
http://localhost:3333
```

## 💻 Executando o frontend

Na pasta `frontend`:

```bash
npm install
ng serve
```

O frontend ficará disponível em:

```
http://localhost:4200
```

## 🔐 Usuário para teste

Email:

```
admin@empresa.com
```

Senha:

```
123456
```

## 🌎 Banco de dados

O projeto utiliza PostgreSQL.

Em ambiente de desenvolvimento, o banco pode ser executado através do Docker Compose.

Para produção, a aplicação suporta conexão através de variáveis de ambiente utilizando um banco PostgreSQL hospedado.

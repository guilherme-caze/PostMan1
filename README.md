# Projeto Cadastro de Usuários (React + Node.js)

Este projeto é um sistema simples de cadastro de usuários utilizando React no frontend e Node.js (Express) no backend, com persistência dos dados em um arquivo `dados.json`.

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina

---

## Instalação

### 1. Clone o repositório ou baixe os arquivos

```bash
git clone <https://github.com/guilherme-caze/PostMan1.git>
cd PostMan1/postman1
```

### 2. Instale as dependências do backend

```bash
npm install express cors body-parser
```

### 3. Instale as dependências do frontend

Se estiver usando React com Vite ou Create React App, rode:

```bash
npm install
```

dentro da pasta do frontend (`postman1`).

---

## Como rodar o backend

Na pasta `postman1`, execute:

```bash
node server.cjs
```

Você verá no terminal:
```
Servidor rodando na porta 3001
```

---

## Como rodar o frontend

Na pasta `postman1`, execute:

```bash
npm run dev
```
ou, se estiver usando Create React App:
```bash
npm start
```

---

## Endpoints da API

- **GET /cadastro**  
  Retorna todos os cadastros.

- **POST /cadastro**  
  Cadastra um novo usuário.  
  Corpo (JSON):
  ```json
  {
    "nome": "Jose",
    "email": "jose@gmail.com",
    "senha": "12345"
  }
  ```

- **PUT /salvar/:id**  
  Atualiza um usuário pelo `id`.  
  Corpo (JSON):
  ```json
  {
    ATUALIZADO
    "nome": "Claudio",
    "email": "claudio@gmail.com",
    "senha": "54321"
  }

- **DELETE /salvar/:id**  
  Remove um usuário pelo `id`.

---

## Observações

- Os dados ficam salvos no arquivo `dados.json` na pasta do backend.
- Para testar os endpoints, foi utilizado o [Postman](https://www.postman.com/).
- Certifique-se de que o backend está rodando antes de usar o frontend.

---

## Postman

Servidor utilizado: http://localhost:3001/cadastro

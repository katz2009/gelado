# 🧊 Projeto Gelado - Sistema de Gerenciamento de Eventos e Inscrições

Este é um sistema web completo desenvolvido com Node.js e PostgreSQL, utilizando arquitetura MVC, que permite gerenciar eventos, usuários e inscrições.

---

## 🚀 Funcionalidades

- Cadastro, listagem, edição e exclusão de **usuários**
- Cadastro, listagem, edição e exclusão de **eventos**
- Cadastro, listagem, edição e exclusão de **inscrições**
- API RESTful com endpoints organizados
- Conexão segura com banco de dados PostgreSQL
- Estrutura modular com **Models**, **Services** e **Controllers**

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL
- pg (driver PostgreSQL)
- dotenv
- body-parser
- cors

---

## ⚙️ Configuração do Banco de Dados

1. Crie um banco de dados PostgreSQL local com o nome desejado.
2. Configure o arquivo `.env` na raiz do projeto com as informações da conexão:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
```

```bash
node scripts/runSQLScript.js
```
```bash
npm start
```

```bash
npm run init-db
```
```bash
node server.js
```
```bash
GET     http://localhost:3000/api/users
POST    http://localhost:3000/api/events
DELETE  http://localhost:3000/api/registrations/:id
```

# Web Application Document - Projeto Individual - Módulo 2 - Inteli


## Nome do Projeto
Gelados

#### Autor do projeto
Andre

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>


## <a name="c1"></a>1. Introdução (Semana 01)

O projeto consiste em uma plataforma simples de eventos com gerenciamento de inscrições. Seu objetivo é permitir que usuários se cadastrem, visualizem eventos disponíveis e realizem inscrições.

Administradores podem criar eventos e acompanhar as inscrições feitas por cada usuário. A aplicação é construída com Node.js, Express e PostgreSQL, seguindo a arquitetura MVC (Model-View-Controller), com organização em models, controllers, services e rotas.

A API possui endpoints para cadastro de usuários, criação de eventos e registro de inscrições, além de funcionalidades para listar, editar e deletar dados. O banco de dados é estruturado com três tabelas principais: `users`, `events` e `registrations`.

O sistema é acessado por meio de requisições HTTP e testado usando arquivos `.rest`. A proposta visa aplicar conceitos essenciais de desenvolvimento backend, como integração com banco de dados, criação de rotas RESTful e organização do código em camadas.


---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01 - opcional)

*Posicione aqui sua(s) Persona(s) em forma de texto markdown com imagens, ou como imagem de template preenchido. Atualize esta seção ao longo do módulo se necessário.*

### 2.2. User Stories (Semana 01 - opcional)

*Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a referência USXX para numeração (US01, US02, US03, ...). Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST de 1 User Storie prioritária.*

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

![image](https://res.cloudinary.com/dz2ojyssq/image/upload/v1747936846/geladinho_sidfa2.png)

```sql
-- Criação da tabela de usuários
CREATE TABLE if not exists users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criação da tabela de eventos
CREATE TABLE if not exists events (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  date TIMESTAMP NOT NULL,
  created_by INT REFERENCES users(id)
);

-- Criação da tabela de inscrições
CREATE TABLE if not exists registrations (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  event_id INT REFERENCES events(id),
  registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


```

### 3.1.1 BD e Models (Semana 5)

O sistema possui três Models principais, correspondentes às tabelas do banco de dados PostgreSQL:

- **UserModel** (`users`): Representa os usuários cadastrados na plataforma. Cada usuário possui um `id`, `name`, `email` e `created_at`. Esse model permite operações de criação, listagem, atualização e exclusão de usuários.

- **EventModel** (`events`): Representa os eventos criados na plataforma. Cada evento possui um `id`, `title`, `date` e `created_by`, que é uma referência ao usuário criador. O model oferece métodos para gerenciar eventos com total suporte a operações CRUD.

- **RegistrationModel** (`registrations`): Representa as inscrições de usuários em eventos. Possui os campos `id`, `user_id`, `event_id` e `registered_at`. Permite registrar, listar, atualizar e remover inscrições.

Os models encapsulam a lógica de acesso ao banco de dados usando comandos SQL, garantindo uma separação clara entre a lógica de negócio (services/controllers) e a camada de dados.

As queries SQL são executadas por meio do módulo `pg` do Node.js, utilizando uma pool de conexões definida em `config/database.js`.

### 3.2. Arquitetura (Semana 5)

![image](https://res.cloudinary.com/dz2ojyssq/image/upload/v1747938703/Screen_Shot_2025-05-22_at_15.30.50_bsyofu.png)

  
### 3.3. Wireframes (Semana 03 - opcional)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05 - opcional)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

## 3.3 Endpoints da API

Abaixo estão listados todos os endpoints criados para o sistema de gerenciamento de eventos com inscrições.

### 🧑 Usuários (`/api/users`)

| Método | Rota              | Descrição                     |
|--------|-------------------|-------------------------------|
| GET    | `/api/users`      | Lista todos os usuários       |
| GET    | `/api/users/:id`  | Retorna um usuário por ID     |
| POST   | `/api/users`      | Cria um novo usuário          |
| PUT    | `/api/users/:id`  | Atualiza um usuário existente |
| DELETE | `/api/users/:id`  | Deleta um usuário             |

---

### 📅 Eventos (`/api/events`)

| Método | Rota               | Descrição                      |
|--------|--------------------|--------------------------------|
| GET    | `/api/events`      | Lista todos os eventos         |
| GET    | `/api/events/:id`  | Retorna um evento por ID       |
| POST   | `/api/events`      | Cria um novo evento            |
| PUT    | `/api/events/:id`  | Atualiza um evento existente   |
| DELETE | `/api/events/:id`  | Deleta um evento               |

---

### 📝 Inscrições (`/api/registrations`)

| Método | Rota                        | Descrição                          |
|--------|-----------------------------|------------------------------------|
| GET    | `/api/registrations`        | Lista todas as inscrições          |
| GET    | `/api/registrations/:id`    | Retorna uma inscrição por ID       |
| POST   | `/api/registrations`        | Cria uma nova inscrição            |
| PUT    | `/api/registrations/:id`    | Atualiza uma inscrição existente   |
| DELETE | `/api/registrations/:id`    | Deleta uma inscrição               |


### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

https://youtu.be/lhPOBCgEVx8?si=YUcCmuv7fPOEs6bX

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que o leitor possa consultar caso ele se interessar em aprofundar._<br>

---
---
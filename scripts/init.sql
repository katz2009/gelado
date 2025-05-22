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

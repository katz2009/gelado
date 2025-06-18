CREATE TABLE if not exists users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE if not exists events (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  date TIMESTAMP NOT NULL,
  created_by INT REFERENCES users(id)
);
CREATE TABLE if not exists registrations (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  event_id INT REFERENCES events(id),
  registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO users (name, email) VALUES
('Alice Santos', 'alice@example.com'),
('Bruno Lima', 'bruno@example.com'),
('Carla Souza', 'carla@example.com');

INSERT INTO events (title, date, created_by) VALUES
('Tech Meetup', '2025-07-10 18:00:00', 1),
('Workshop de Node.js', '2025-08-05 14:00:00', 2),
('Conferência de IA', '2025-09-20 09:00:00', 3);

INSERT INTO registrations (user_id, event_id) VALUES
(1, 1), 
(2, 2), 
(3, 3) 





CREATE DATABASE IF NOT EXISTS user_db;
USE user_db;

CREATE TABLE IF NOT EXISTS users(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO users(nome, email) VALUES
('João da Silva', 'joao.silva@email.com'),
('Maria Oliveira','maria.oliveira@email.com'),
('Carlo Souza','carlos.souza@email.com'),
('Ana Paula', 'ana.paula@email.com'),
('Lucas Martins','lucas.martins@rmail.com'),
('Fernanda Lima', 'fernanda.lima@email'),
('Ricardo Alves','ricardo.alves@email.com'),
('Juliana Costa','juliana.costa@email.com'),
('Felipe Rocha','felipe.rocha@email.com'),
('Camila Mendes','camila.mendes@email.com');

SELECT * FROM users
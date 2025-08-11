create database crud_db;
use crud_db;

create table usuarios(
    id int auto_increment primary key,
    nome varchar(50) not null,
    email varchar(100) not null unique
);

insert into usuarios (nome, email) values
('João Silva', 'joao.silva@example.com'),
('Maria Souza', 'maria.souza@example.com'),
('Pedro Oliveira', 'pedro.oliveira@example.com');
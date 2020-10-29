CREATE DATABASE cosas;
use cosas;

CREATE TABLE sys_user(
	sys_user_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
	pass VARCHAR(20) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
    vip BOOLEAN NOT NULL DEFAULT false
);

insert into sys_user (username, pass, email) values 
("johnnypistolas5", "123456", "johnnyguns1@gmail.com");

insert into sys_user (username, pass, email, vip) values 
("pepe23", "123123", "pepepepe2@gmail.com", true);

insert into sys_user (username, pass, email, vip) values 
("pepe23", "123123", "pepepepe3@gmail.com", true);

DELETE FROM sys_user WHERE sys_user_id = 3;

UPDATE sys_user set vip = true where username = "johnnypistolas5";

SELECT * FROM sys_user;

CREATE TABLE product(
	product_id INTEGER NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC(7,2) NOT NULL,
    description TEXT 
);

insert into product values (5435, "Neutrex", 3.14, "La del futuro y tal");
insert into product values (3455, "Mi color", 2.75, "La de los payasos");

select * FROM product;

CREATE TABLE purchase(
	sys_user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    purchase_date DATE NOT NULL,
    PRIMARY KEY(sys_user_id, product_id),
    CONSTRAINT sys_user_id_fk_1 FOREIGN KEY (sys_user_id) REFERENCES sys_user(sys_user_id),
    CONSTRAINT product_id_fk_1 FOREIGN KEY (product_id) REFERENCES product(product_id)

);

insert into purchase values(1, 5435, "2020/02/23");
insert into purchase values(1, 5435, "2020/02/23");

select * FROM purchase;
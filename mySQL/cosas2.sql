create database cosas;
use cosas;
use camping;

CREATE TABLE sys_user (
    sys_user_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    pass VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    vip BOOLEAN NOT NULL DEFAULT FALSE
);

-- drop table sys_user;

insert into sys_user (username, pass, email) values 
("johnnypistolas5", "123456", "johnnyguns1@gmail.com");
insert into sys_user (username, pass, email, vip) values 
("pepe23", "1478752", "pepepep242e2@gmail.com", true);

update sys_user set vip = true where username = "johnnypistolas5";

DELETE FROM sys_user WHERE sys_user_id = 4;



select * from sys_user;

CREATE TABLE product(
	product_id INTEGER NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC(7,2) NOT NULL,
    description TEXT 
);

insert into product values (5414, "Neutrex", 3.14, "La del futuro y tal");
insert into product values (6981, "Mi Color", 2.75, "LA de los payasos y tal");

select * from product;

CREATE TABLE purchase(
	sys_user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    pruchase_date DATE NOT NULL,
    PRIMARY KEY(sys_user_id, product_id),
    CONSTRAINT sys_user_id_fk_1 FOREIGN KEY (sys_user_id) REFERENCES sys_user(sys_user_id),
    CONSTRAINT product_id_fk_1 FOREIGN KEY (product_id) REFERENCES product(product_id)
);

insert into purchase values (1, 6981, "2020/02/23");




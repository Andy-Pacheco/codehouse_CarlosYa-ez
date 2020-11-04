create database videogame;
use videogame;

CREATE TABLE videogame (
   videogame_id INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(100) NOT NULL,
   lang VARCHAR(5) NOT NULL,
   description BLOB NULL,
   rating DECIMAL (3,1),
   number_of_players INT DEFAULT 0
);
 
CREATE TABLE player(
   player_id INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   videogame_id INT NOT NULL,
   name VARCHAR(80) NOT NULL,
   age INT NOT NULL,
   is_famous INT NOT NULL DEFAULT 0,  
   registration_date DATE NULL,
   FOREIGN KEY(videogame_id) REFERENCES videogame(videogame_id)
);

insert into videogame(title, lang, description, rating, number_of_players) values ("Castelvania", "EN", "Dracula y cosas así", 5, 22);
insert into videogame(title, lang, description, rating, number_of_players) values ("Resident Evil", "EN", "Zombies y tal", 4, 60);
insert into videogame(title, lang, description, rating, number_of_players) values ("Left 4 Dead", "EN", "Más zombies y bosses", 5, 11);
insert into videogame(title, lang, description, rating, number_of_players) values ("Silent Hill", "ES", "Estás muerto y tal", 3, 55);
insert into videogame(title, lang, description, rating, number_of_players) values ("Forbidden Siren", "JP", "Más fantasmas y cosas así", 2, 14);

insert into player(videogame_id, name, age) values (3, "Joaquin Lucas",22);
insert into player(videogame_id, name, age) values (1, "Carlos Perez",18);
insert into player(videogame_id, name, age) values (1, "Pepe Peleteiro",25);
insert into player(videogame_id, name, age) values (2, "Jaun Landín",35);
insert into player(videogame_id, name, age) values (2, "Luisa Montero", 60);
insert into player(videogame_id, name, age) values (5, "Perry Mason", 19);
insert into player(videogame_id, name, age, is_famous) values (1, "Castle House",33, 1);
insert into player(videogame_id, name, age) values (1, "Rick Fernandez",33);
insert into player(videogame_id, name, age, is_famous) values (5, "Frank Castle",33, 1);
insert into player(videogame_id, name, age) values (2, "Alejandro Gonzalez",33);

/*Recuperar todos los juegos en los que al menos juega 1 jugador:*/
/*A: */
SELECT * FROM videogame WHERE videogame_id IN ( SELECT videogame_id FROM player );
/*B: SOME y ANY son lo mismo*/
SELECT * FROM videogame WHERE videogame_id = ANY ( SELECT videogame_id FROM player );
SELECT * FROM videogame WHERE videogame_id = SOME ( SELECT videogame_id FROM player );


/*En el siguiente ejemplo seleccionaré todos los jugadores que juegan a un juego en ingles:*/
SELECT name FROM player WHERE videogame_id IN ( SELECT videogame_id FROM videogame WHERE lang = 'EN' );


/*Ahora voy a realizar otra consulta con una subconsulta y funciones agregadas, en concreto utilizando MAX.
Para demostrártelo selecciono los jugadores que tienen la mayor edad entre los jugadores:*/
SELECT name FROM player WHERE age = ( SELECT MAX(age) FROM player );

/*Ejemplo 4 subconsulta con subconsulta anidada
*** Las subconsultas se resuelven antes que su consulta principal
*** se ejecuta de adentro hacia afuera
*/

SELECT *
FROM videogame
WHERE lang IN ( SELECT lang FROM videogame WHERE videogame_id = SOME ( SELECT videogame_id FROM player WHERE is_famous = 1 ) );

SELECT AVG(age) FROM player;
SELECT name, age FROM player WHERE age > (SELECT AVG(age) FROM player);

SELECT * FROM videogame WHERE lang IN (SELECT lang FROM videogame WHERE videogame_id = SOME (SELECT videogame_id FROM player WHERE is_famous = true)); 

SELECT * FROM videogame WHERE rating > (SELECT AVG(rating) FROM videogame);

SELECT name, age FROM player WHERE is_famous = true;

SELECT * FROM player WHERE videogame_id IN (SELECT videogame_id FROM videogame WHERE number_of_players IN (SELECT min(number_of_players) FROM videogame));


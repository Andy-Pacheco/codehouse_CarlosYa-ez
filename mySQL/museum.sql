CREATE DATABASE museum;
USE museum;

CREATE TABLE museum(
	museum_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    name VARCHAR (30) NOT NULL
);

CREATE TABLE painting(
	painting_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT ,
    title VARCHAR (30) NOT NULL,
    museum_id INTEGER,
    CONSTRAINT painting_museum_fk_1 FOREIGN KEY (museum_id) REFERENCES museum(museum_id)
);



INSERT INTO museum (name) VALUES("Museo Guggenheim");
INSERT INTO museum (name) VALUES("Centre Pompidou");
INSERT INTO museum (name) VALUES("Museo Nacional Reina Sofía");
INSERT INTO museum (name) VALUES("Museo del Prado");

SELECT * FROM museum;

INSERT INTO painting (title, museum_id) VALUES ("Guernica", 3);
INSERT INTO painting (title, museum_id) VALUES ("La metamorfosis de Narciso", 3);
INSERT INTO painting (title, museum_id) VALUES ("Sin título", 1);
INSERT INTO painting (title, museum_id) VALUES ("Ritmo, alegría de vivir", 2);
INSERT INTO painting (title, museum_id) VALUES ("Las meninas", 4);
INSERT INTO painting (title) VALUES ("Mona Lisa");
INSERT INTO painting (title) VALUES ("Noche estrellada");
INSERT INTO painting (title) VALUES ("El beso");

SELECT * from painting;
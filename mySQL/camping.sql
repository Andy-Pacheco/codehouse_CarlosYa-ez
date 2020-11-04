CREATE DATABASE camping;
USE camping;

CREATE TABLE camper(
	camper_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    dni VARCHAR(9) NOT NULL UNIQUE,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(200) NOT NULL,
    zip_code VARCHAR(5) NOT NULL,
    city VARCHAR(50) NOT NULL, 
    province VARCHAR(50) NOT NULL,
    phone VARCHAR(9) NOT NULL, 
    yob NUMERIC(4,0) NOT NULL, 
    yoi NUMERIC(4,0) NOT NULL
);

CREATE TABLE activity(
	activity_id INTEGER NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(500) NOT NULL,
    min_age NUMERIC(2,0) NOT NULL,
    max_kid NUMERIC(2,0) NOT NULL,
    city VARCHAR(50) NOT NULL, 
    province VARCHAR(50) NOT NULL
);

CREATE TABLE kid_activity(
	camper_id INTEGER NOT NULL,
    activity_id INTEGER NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    observation VARCHAR(500),
    -- falta linea de relacion para el borrado
    PRIMARY KEY(camper_id, activity_id),
    CONSTRAINT fk_camper_1 FOREIGN KEY (camper_id) REFERENCES camper(camper_id), -- ON DELETE NO ACTION ON UPDATE CASCADE
    CONSTRAINT fk_activity_1 FOREIGN KEY (activity_id) REFERENCES activity(activity_id)
);

insert into camper (dni, name, address, zip_code, city, province, phone, yob, yoi) values 
("11111111A", "Antonio Pérez López", "c/ Azucena nº 5 4ºD", "32004", "Ourense", "Ourense", "911111111", 2001, 2014);
insert into camper (dni, name, address, zip_code, city, province, phone, yob, yoi) values 
("22222222B", "Luisa Méndez Rodríguez", "Plaza Mayor nº 26 2º", "40523", "Bande", "Ourense", "922222222", 2002, 2014);
insert into camper (dni, name, address, zip_code, city, province, phone, yob, yoi) values 
("33333333C", "Juana Flecha González", "c/ de la Esperanza nº 45 6ºC", "32003", "Ourense", "Ourense", "633333333", 2006, 2015);
insert into camper (dni, name, address, zip_code, city, province, phone, yob, yoi) values 
("44444444D", "Ana Diz Rial", "c/ Río Avia nº 6 4ºA", "52368", "Ribadavia", "Ourense", "944444444", 2009, 2015);
insert into camper (dni, name, address, zip_code, city, province, phone, yob, yoi) values 
("55555555E", "Andrés Soto Estévez", "Avda. Portugal nº 146 5ºD", "32005", "Ourense", "Ourense", "655555555", 2008, 2014);
insert into camper (dni, name, address, zip_code, city, province, phone, yob, yoi) values 
("66666666F", "Adrián Gómez Cid", "c/ Monte Medo nº 29 4ºC", "32002", "Ourense", "Ourense", "966666666", 2007, 2014);
insert into camper (dni, name, address, zip_code, city, province, phone, yob, yoi) values 
("77777777G", "Susana Montes Rivo", "c/ Ourense nº 14 3ºB ", "45612", "Celanova", "Ourense", "677777777", 2006, 2015);
insert into camper (dni, name, address, zip_code, city, province, phone, yob, yoi) values 
("88888888H", "Lucía Barral Conde", "Avda. Universidad de nº 15 4º C", "32003", "Ourense", "Ourense", "988888888", 2005, 2015);

INSERT INTO activity VALUES (0001, "Senderismo ", "Ruta por el monte en los alrededores de Ourense realizando paradas para observar la flora y la fauna…", 7, 10, "Ourense ", "Ourense");
INSERT INTO activity VALUES (0002, "Hípica", "Conocer cuidados de los caballos y recibir instrucciones básicas y montar con monitor.", 9, 10, "Monterrei ", "Ourense");
INSERT INTO activity VALUES (0003, "Juegos tradicionales", "Visita a Melide para ver la 'I Mostra de Xogos Tradicionais da Terra de Melide' y el 'I Campionato de Tirapedras da Galiza Central.' Organizada por la Asociación Galega do Xogo Popular e Tradicional.", 7, 15, "Melide ", "Ourense");
INSERT INTO activity VALUES (0004, "Tenis ", "Reglas del tenis. Jugar de dos con varios compañeros. Jugar en parejas con diferentes contrincantes y compañeros.", 7, 14, "Ourense ", "Ourense");
INSERT INTO activity VALUES (0005, "Piscina ", "Normas higiénicas. Consejos natación. Tiempo libre.", 10, 15, "Monterrei ", "Ourense");
INSERT INTO activity VALUES (0006, "Playa ", "Visita a la playa. Normas básicas. Recogida de basura. Recogida de algas. Tiempo libre.", 10, 15, "Sanxenxo", "Pontevedra");
INSERT INTO activity VALUES (0007, "Esquí ", "Visita a la estación de Manzaneda. Vista de instalaciones. Consejos para esquiar.", 7, 15, "Manzaneda", "Ourense");

SELECT * FROM camper;

INSERT INTO kid_activity VALUES (3, 0003, "2014-07-25 0:00", "2014-07-25 0:00", "Le hubiera gustado asistir más tiempo");
INSERT INTO kid_activity VALUES (3, 0004, "2014-08-01 0:00", "2014-08-01 0:00", "Es lo suyo");
INSERT INTO kid_activity VALUES (5, 0001, "2014-07-15 0:00", "2014-07-15 0:00", "Le ha gustado");
INSERT INTO kid_activity VALUES (5, 0003, "2014-07-24 0:00", "2014-07-25 0:00", "Ha conocido nuevos juegos");
INSERT INTO kid_activity VALUES (5, 0004, "2014-08-01 0:00", "2014-08-01 0:00", "Quiere convertirse en profesional");
INSERT INTO kid_activity VALUES (6, 0001, "2014-07-15 0:00", "2014-07-15 0:00", "Ha aprendido");
INSERT INTO kid_activity VALUES (6, 0002, "2014-07-16 0:00", "2014-07-23 0:00", "Prefiere otras actividades");
INSERT INTO kid_activity VALUES (6, 0003, "2014-07-24 0:00", "2014-07-25 0:00", "Los pondrá en práctica");
INSERT INTO kid_activity VALUES (6, 0004, "2014-08-01 0:00", "2014-08-01 0:00", "Se cansa enseguida");
INSERT INTO kid_activity VALUES (7, 0001, "2014-07-15 0:00", "2014-07-15 0:00", "No estaba interesado");
INSERT INTO kid_activity VALUES (7, 0003, "2014-07-24 0:00", "2014-07-25 0:00", "No le han gustado");
INSERT INTO kid_activity VALUES (7, 0004, "2014-08-01 0:00", "2014-08-01 0:00", "No le gusta seguir las reglas del juego");
INSERT INTO kid_activity VALUES (8, 0005, "2014-08-15 0:00", "2014-08-17 0:00", "Se aburre");
INSERT INTO kid_activity VALUES (8, 0006, "2014-08-20 0:00", "2014-08-22 0:00", "Muy entretenido");
INSERT INTO kid_activity VALUES (9, 0005, "2014-08-10 0:00", "2014-08-17 0:00", "Se muestra interesado");
INSERT INTO kid_activity VALUES (9, 0006, "2014-08-20 0:00", "2014-08-22 0:00", "Se le hace corto");
INSERT INTO kid_activity VALUES (4, 0001, "2014-07-15 0:00", "2014-07-15 0:00", "Repetiría");
INSERT INTO kid_activity VALUES (4, 0002, "2014-07-16 0:00", "2014-07-23 0:00", "Muy interesado");
INSERT INTO kid_activity VALUES (4, 0003, "2014-07-24 0:00", "2014-07-25 0:00", "No ha disfrutado la actividad");
INSERT INTO kid_activity VALUES (4, 0004, "2014-08-01 0:00", "2014-08-01 0:00", "Sabe ganar y perder");

SELECT name, city, province FROM activity;

SELECT name FROM activity WHERE min_age < 8;

UPDATE activity SET min_age = min_age + 1;

SELECT name, yob FROM camper WHERE yob > 2007 ORDER BY yob;

SELECT name, dni, yob, phone FROM camper WHERE yoi < 2015 ORDER BY name;

UPDATE activity SET max_kid = max_kid + 5 WHERE activity_id = 0005;

SELECT name, max_kid FROM activity WHERE   activity_id = 0005;

UPDATE activity SET description = "Reglas del tenis. Jugar de dos con varios compañeros. Jugar en parejas con diferentes contrincantes y compañeros. Todos los juegos serán por parejas, por la alta afluencia de niños." WHERE name = "Tenis ";

SELECT description FROM activity WHERE name = "Tenis ";

DELETE FROM kid_activity WHERE activity_id = 0001;
DELETE FROM activity WHERE activity_id = 0001;

SELECT name FROM activity;

SELECT DISTINCT camper.name FROM camper INNER JOIN kid_activity ON kid_activity.camper_id=camper.camper_id;

SELECT COUNT(*) FROM kid_activity;

SELECT DISTINCT activity.name FROM activity INNER JOIN kid_activity ON kid_activity.activity_id=activity.activity_id; 

SELECT activity.name,camper.name FROM activity,camper INNER JOIN kid_activity ON kid_activity.activity_id=activity.activity_id;


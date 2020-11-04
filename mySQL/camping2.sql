create database camping;

use camping;

create table camper(
	camper_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    dni VARCHAR(10) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(150) NOT NULL,
    zip_code VARCHAR(5) NOT NULL,
    city VARCHAR(80) NOT NULL,
    province VARCHAR(80) NOT NULL,
    phone_number VARCHAR(15) NOT NULL, 
    year_of_birth YEAR(4) NOT NULL,
    year_of_inscription YEAR NOT NULL    
);


create table activity(
	activity_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT, 
    name VARCHAR(100) NOT NULL,
	description TEXT,
    min_age TINYINT UNSIGNED NOT NULL,
    max_capacity TINYINT NOT NULL,
    city VARCHAR(80) NOT NULL,
    province VARCHAR(80) NOT NULL
);

CREATE TABLE camper_activity(
	camper_activity_id BIGINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	camper_id INTEGER NOT NULL,  
    activity_id INTEGER NOT NULL,
	start_date DATETIME NOT NULL,
    end_date DATETIME NOT NULL,
    observation TEXT,
    CONSTRAINT fk_camper_1 FOREIGN KEY (camper_id) 
    REFERENCES camper (camper_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_activity_1 FOREIGN KEY (activity_id) 
    REFERENCES activity (activity_id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO camper(dni, name, address, zip_code, city, province, phone_number, year_of_birth, year_of_inscription) VALUES ("11111111A", "Antonio Pérez López", "c/ Azucena nº 5 4ºD", "32004", "Ourense", "Ourense", "911111111", 2001, 2014), ("22222222B", "Luisa Méndez Rodríguez", "Plaza Mayor nº 26 2º", "40523", "Bande", "Ourense", "922222222", 2002, 2014), ("33333333C", "Juana Flecha González", "c/ de la Esperanza nº 45 6ºC", "32003", "Ourense", "Ourense", "633333333", 2006, 2015),  ("44444444D", "Ana Diz Rial", "c/ Río Avia nº 6 4ºA", "52368", "Ribadavia", "Ourense", "944444444", 2009, 2015),  ("55555555E", "Andrés Soto Estévez", "Avda. Portugal nº 146 5ºD", "32005", "Ourense", "Ourense", "655555555", 2008, 2014), ("66666666F", "Adrián Gómez Cid", "c/ Monte Medo nº 29 4ºC", "32002", "Ourense", "Ourense", "966666666", 2007, 2014),  ("77777777G", "Susana Montes Rivo", "c/ Ourense nº 14 3ºB ", "45612", "Celanova", "Ourense", "677777777", 2006, 2015),  ("88888888H", "Lucía Barral Conde", "Avda. Universidad de nº 15 4º C", "32003", "Ourense", "Ourense", "988888888", 2005, 2015);


INSERT INTO activity(name, description, min_age, max_capacity, city, province) VALUES ("Senderismo ", "Ruta por el monte en los alrededores de Ourense realizando paradas para observar la flora y la fauna…", 7, 10, "Ourense ", "Ourense"),
("Hípica", "Conocer cuidados de los caballos y recibir instrucciones básicas y montar con monitor.", 9, 10, "Monterrei ", "Ourense"),
("Juegos tradicionales", "Visita a Melide para ver la 'I Mostra de Xogos Tradicionais da Terra de Melide' y el 'I Campionato de Tirapedras da Galiza Central.' Organizada por la Asociación Galega do Xogo Popular e Tradicional.", 7, 15, "Melide ", "Ourense"),
("Tenis ", "Reglas del tenis. Jugar de dos con varios compañeros. Jugar en parejas con diferentes contrincantes y compañeros.", 7, 14, "Ourense ", "Ourense"),
("Piscina ", "Normas higiénicas. Consejos natación. Tiempo libre.", 10, 15, "Monterrei ", "Ourense"),
("Playa ", "Visita a la playa. Normas básicas. Recogida de basura. Recogida de algas. Tiempo libre.", 10, 15, "Sanxenxo", "Pontevedra"),
("Esquí ", "Visita a la estación de Manzaneda. Vista de instalaciones. Consejos para esquiar.", 7, 15, "Manzaneda", "Ourense");


select * from activity;

INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (2, 3, "2014-07-25 0:00", "2014-07-25 0:00", "Le hubiera gustado asistir más tiempo");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (2, 4, "2014-08-01 0:00", "2014-08-01 0:00", "Es lo suyo");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (3, 1, "2014-07-15 0:00", "2014-07-15 0:00", "Le ha gustado");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (3, 3, "2014-07-24 0:00", "2014-07-25 0:00", "Ha conocido nuevos juegos");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (3, 4, "2014-08-01 0:00", "2014-08-01 0:00", "Quiere convertirse en profesional");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (4, 1, "2014-07-15 0:00", "2014-07-15 0:00", "Ha aprendido");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (4, 2, "2014-07-16 0:00", "2014-07-23 0:00", "Prefiere otras actividades");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (4, 3, "2014-07-24 0:00", "2014-07-25 0:00", "Los pondrá en práctica");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (4, 4, "2014-08-01 0:00", "2014-08-01 0:00", "Se cansa enseguida");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (5, 1, "2014-07-15 0:00", "2014-07-15 0:00", "No estaba interesado");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (5, 3, "2014-07-24 0:00", "2014-07-25 0:00", "No le han gustado");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (5, 4, "2014-08-01 0:00", "2014-08-01 0:00", "No le gusta seguir las reglas del juego");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (6, 5, "2014-08-15 0:00", "2014-08-17 0:00", "Se aburre");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (6, 6, "2014-08-20 0:00", "2014-08-22 0:00", "Muy entretenido");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (7, 5, "2014-08-10 0:00", "2014-08-17 0:00", "Se muestra interesado");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (7, 6, "2014-08-20 0:00", "2014-08-22 0:00", "Se le hace corto");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (8, 1, "2014-07-15 0:00", "2014-07-15 0:00", "Repetiría");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (8, 2, "2014-07-16 0:00", "2014-07-23 0:00", "Muy interesado");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (8, 3, "2014-07-24 0:00", "2014-07-25 0:00", "No ha disfrutado la actividad");
INSERT INTO camper_activity(camper_id, activity_id, start_date, end_date, observation) VALUES (8, 4, "2014-08-01 0:00", "2014-08-01 0:00", "Sabe ganar y perder");


-- CONSULTAS

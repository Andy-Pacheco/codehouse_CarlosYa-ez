CREATE DATABASE pruebas;
USE pruebas;


CREATE TABLE product(
	product_id INTEGER  PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(4,2) NOT NULL
);

CREATE TABLE image (
	image_id INTEGER PRIMARY KEY NOT NULL,
    product_id INTEGER NOT NULL,
	name VARCHAR(100) NOT NULL,
	path VARCHAR(250) NOT NULL,
    CONSTRAINT fk_product_1 FOREIGN KEY (product_id)
    REFERENCES product (product_id) ON DELETE CASCADE ON UPDATE CASCADE
);
    
INSERT INTO product VALUES(111, "Lejia", "Lejia barata y buena", 2.16);
INSERT INTO product VALUES(222, "Detergente", "Detergente caro y malo", 5.36);

INSERT INTO image VALUES (212, 111, "imagen.jpg", "C/sdjfhsfj");

SELECT * FROM product;
SELECT * FROM image;


CREATE DATABASE books;

USE books;

CREATE TABLE book (
	book_code NUMERIC (3) NOT NULL PRIMARY KEY, 
	title VARCHAR (30) NOT NULL, 
	first_name VARCHAR (25) NOT NULL, 
	last_name VARCHAR (30) NOT NULL,
	year_written SMALLINT NOT NULL, 
	price NUMERIC (5,2) NOT NULL
);

INSERT INTO book (book_code, title, first_name, last_name, year_written, price)
values(101, 'To Kill A Mocking Bird', 'Harper', 'Lee', 1960, 64.00);

INSERT INTO book (book_code, title, first_name, last_name, year_written, price)
values(102, 'The Great Gatsby', 'Scott', 'Fitzgerald', 1925, 74.55);

INSERT INTO book (book_code, title, first_name, last_name, year_written, price)
values(103, 'A Passage To India', 'E.M.', 'Foster', 1924, 230.00);

INSERT INTO book (book_code, title, first_name, last_name, year_written, price)
values(104, 'Invisible Man', 'Ralph', 'Elison', 1952, 136.89);

INSERT INTO book (book_code, title, first_name, last_name, year_written, price)
values(105, 'Mrs.Dalloway', 'Virginia', 'Wolf', 1925, 135.00);

INSERT INTO book (book_code, title, first_name, last_name, year_written, price)
values(106, 'Things Fall Apart', 'Chinua', 'Achebe', 1958, 150.65);

INSERT INTO book (book_code, title, first_name, last_name, year_written, price)
values(107, '1984', 'George', 'Orwell', 1945, 78.00);

INSERT INTO book (book_code, title, first_name, last_name, year_written, price)
values(108, 'The Time Machine', 'H.G.', 'Wells', 1895, 467.00);

INSERT INTO book (book_code, title, first_name, last_name, year_written, price)
values(109, 'The Old Man and The Sea', 'Ernest', 'Hemingway', 1952, 199.45);

INSERT INTO book (book_code, title, first_name, last_name, year_written, price)
values(110, 'A Farewell To Arms', 'Ernest', 'Hemingway', 1928, 160.50);


CREATE TABLE editor (
	editor_id NUMERIC (3) NOT NULL PRIMARY KEY, 
	first_name VARCHAR (25) NOT NULL,
	last_name VARCHAR (30) NOT NULL,
	affiliation VARCHAR (25)
);

INSERT INTO editor (editor_id, first_name, last_name, affiliation)
values (201, 'Jack', 'Collins', 'NYT');

INSERT INTO editor (editor_id, first_name, last_name, affiliation)
values (202, 'Anna', 'Matthews', 'WP');

INSERT INTO editor (editor_id, first_name, last_name, affiliation)
values (203, 'Tim', 'Stevens', 'Vogue');

INSERT INTO editor (editor_id, first_name, last_name, affiliation)
values (204, 'Barry', 'Shaw', null);

INSERT INTO editor (editor_id, first_name, last_name, affiliation)
values (205, 'Chris', 'Richards', 'NYT');

INSERT INTO editor (editor_id, first_name, last_name, affiliation)
values (206, 'Linda', 'Thompson', 'Chronicle');

INSERT INTO editor (editor_id, first_name, last_name, affiliation)
values (207, 'Joe', 'Anderson', 'NYP');

INSERT INTO editor (editor_id, first_name, last_name, affiliation)
values (208, 'Harry', 'Freeman', 'NYT');

INSERT INTO editor (editor_id, first_name, last_name, affiliation)
values (209, 'Ellen', 'Murray', null);

INSERT INTO editor (editor_id, first_name, last_name, affiliation)
values (210, 'Nancy', 'Thompson', 'NYP');


CREATE TABLE rating(
	rating_code CHAR(4) NOT NULL PRIMARY KEY, 
	editor_id NUMERIC(3) NOT NULL, 
	book_code NUMERIC(3) NOT NULL,
	starrating NUMERIC(1) NOT NULL, 
	rating_date DATE,
	CONSTRAINT rating_editor_fk_1 FOREIGN KEY (editor_id) REFERENCES editor(editor_id),
	CONSTRAINT rating_book_fk_1 FOREIGN KEY(book_code) REFERENCES book(book_code)
);

INSERT INTO rating (rating_code, editor_id, book_code, starrating, rating_date)
values ('R1', 201, 101, 2, '1992-11-13');

INSERT INTO rating (rating_code, editor_id, book_code, starrating, rating_date)
values ('R2', 201, 101, 4, '1994-01-15');

INSERT INTO rating (rating_code, editor_id, book_code, starrating, rating_date)
values ('R3', 202, 106, 4, NULL);

INSERT INTO rating (rating_code, editor_id, book_code, starrating, rating_date)
values ('R4', 203, 103, 2, '1998-02-01');

INSERT INTO rating (rating_code, editor_id, book_code, starrating, rating_date)
values ('R5', 203, 108, 4, '2001-03-01');

INSERT INTO rating (rating_code, editor_id, book_code, starrating, rating_date)
values ('R6', 203, 108, 2, '2005-06-30');

INSERT INTO rating (rating_code, editor_id, book_code, starrating, rating_date)
values ('R7', 204, 101, 3, '1999-10-23');

INSERT INTO rating (rating_code, editor_id, book_code, starrating, rating_date)
values ('R8', 205, 103, 3, '2004-02-16');

INSERT INTO rating (rating_code, editor_id, book_code, starrating, rating_date)
values ('R9', 205, 104, 2, '2004-02-16');

INSERT INTO rating (rating_code, editor_id, book_code, starrating, rating_date)
values ('R10', 205, 108, 4, NULL);

INSERT INTO rating (rating_code, editor_id, book_code, starrating, rating_date)
values ('R11', 206, 107, 3, '1999-07-02');

INSERT INTO rating (rating_code, editor_id, book_code, starrating, rating_date)
values ('R12', 206, 106, 5, '1997-12-21');

INSERT INTO rating (rating_code, editor_id, book_code, starrating, rating_date)
values ('R13', 208, 104, 3, '2005-06-30');

INSERT INTO rating (rating_code, editor_id, book_code, starrating, rating_date)
values ('R14', 209, 104, 3, '2005-06-30');



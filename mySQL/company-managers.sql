CREATE DATABASE company_hierarchy;
USE company_hierarchy;

CREATE TABLE employee (
	employee_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(80) NOT NULL,
    last_name VARCHAR(80) NOT NULL,
    department_id INTEGER NOT NULL,
    CONSTRAINT employee_department_fk_1 FOREIGN KEY (department_id) REFERENCES department(department_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE department(
	department_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(80) NOT NULL UNIQUE
);

CREATE TABLE supervisor(
	supervision_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	department_id INTEGER NOT NULL,
    employee_id INTEGER NOT NULL,
    start_date DATE NOT NULL,
    end_date date,
	CONSTRAINT supervisor_department_fk_1 FOREIGN KEY (department_id) REFERENCES department(department_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT supervisor_eployee_fk_1 FOREIGN KEY (employee_id) REFERENCES employee(employee_id) ON UPDATE CASCADE
);

SELECT * FROM supervisor;

INSERT INTO department (name) VALUES ("Finanzas");
INSERT INTO department (name) VALUES ("Ventas");
INSERT INTO department (name) VALUES ("RRHH");
INSERT INTO department (name) VALUES ("Comunicación");
INSERT INTO department (name) VALUES ("Logística");

SELECT * FROM employee;

INSERT INTO employee (first_name, last_name, department_id) VALUES("Juan", "Jiménez", 4);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Juanito", "García", 1);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Juanete", "Rodríguez", 5);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Juana", "Jiménez", 3);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Juanita", "Jiménez", 2);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Pepe", "García", 2);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Pepito", "Jiménez", 5);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Pepita", "Rodríguez", 3);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Pepón", "Jiménez", 4);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Pepa", "García", 2);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Jose", "Jiménez", 3);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Josito", "García", 4);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Josa", "Jiménez", 2);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Josita", "Jiménez", 5);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Josete", "Rodríguez", 1);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Joselito", "García", 4);
INSERT INTO employee (first_name, last_name, department_id) VALUES("Joselita", "Jiménez", 2);
INSERT INTO employee (first_name, last_name, department_id) VALUES("1234", "Jiménez", 5);
INSERT INTO employee (first_name, last_name, department_id) VALUES("4321", "Rodríguez", 1);

INSERT INTO supervisor (department_id, employee_id, start_date, end_date) VALUES (1, 2, "2014-01-04", "2018-03-05");
INSERT INTO supervisor (department_id, employee_id, start_date, end_date) VALUES (1, 15, "2018-03-05", "2020-01-01");
INSERT INTO supervisor (department_id, employee_id, start_date) VALUES (1, 19, "2020-01-01");
INSERT INTO supervisor (department_id, employee_id, start_date) VALUES (2, 10, "2014-01-04");
INSERT INTO supervisor (department_id, employee_id, start_date) VALUES (3, 11, "2014-01-04");
INSERT INTO supervisor (department_id, employee_id, start_date) VALUES (4, 16, "2014-01-04");
INSERT INTO supervisor (department_id, employee_id, start_date) VALUES (5, 3, "2014-01-04");

SELECT * FROM employee LEFT JOIN department ON employee.department_id = department.department_id
						LEFT JOIN supervisor ON employee.employee_id = supervisor.employee_id;
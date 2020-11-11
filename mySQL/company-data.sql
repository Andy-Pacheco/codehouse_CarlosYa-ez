CREATE DATABASE company_data;
USE company_data;

CREATE TABLE employee (
	employee_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    c_code VARCHAR(16) NOT NULL,
    name VARCHAR(200) NOT NULL,
    age DECIMAL(2,0) NOT NULL,
    job VARCHAR(100) NOT NULL,
    address VARCHAR(200) NOT NULL,
    entry_date DATE NOT NULL,
    salary INTEGER NOT NULL,
    commission INTEGER DEFAULT 0,
    department_id INTEGER NOT NULL,
    CONSTRAINT fk_department_1 FOREIGN KEY(department_id) REFERENCES department(department_id)
);

DROP TABLE employee;

CREATE TABLE department (
    department_id INTEGER PRIMARY KEY NOT NULL,
    dep_name VARCHAR(200) NOT NULL,
    location VARCHAR(200) NOT NULL
);

INSERT INTO employee (c_code, name, age, job, address, entry_date, salary, department_id)
VALUES ("281-160483-0005F", "Rocha Vargas Hector", 27, "Vendedor", "Leon", "1983-05-12", 12000, 40);
INSERT INTO employee (c_code, name, age, job, address, entry_date, salary, commission, department_id)
VALUES ("281-040483-0056P", "López Hernandez Julio", 27, "Analista", "Chinandega", "1982-07-14", 13000, 1500, 20);
INSERT INTO employee (c_code, name, age, job, address, entry_date, salary, commission, department_id)
VALUES ("081-130678-0004S", "Esquivel José", 31, "Director", "Juigalpa", "1981-06-05", 16700, 1200, 30);
INSERT INTO employee (c_code, name, age, job, address, entry_date, salary, department_id)
VALUES ("281-160473-0009Q", "Delgado Carmen", 37, "Vendedor", "Leon", "1983-03-02", 13400, 40);
INSERT INTO employee (c_code, name, age, job, address, entry_date, salary, commission, department_id)
VALUES ("281-160483-0005F", "Castillo Montes Luis", 17, "Vendedor", "Masaya", "1982-08-12", 16309, 1000, 40);
INSERT INTO employee (c_code, name, age, job, address, entry_date, salary, department_id)
VALUES ("281-240784-0004Y", "Esquivel Leonel Alfonso", 26, "Presidente", "Nagarote", "1981-09-12", 15000, 30);
INSERT INTO employee (c_code, name, age, job, address, entry_date, salary, department_id)
VALUES ("281-161277-0008R", "Perez Luis", 32, "Empleado", "Managua", "1980-03-02", 16890, 10);

INSERT INTO department VALUES (10, "Desarrollo Software", "El Coyolar");
INSERT INTO department VALUES (20, "Analisis Sistema", "El Coyolar");
INSERT INTO department VALUES (30, "Contabilidad", "Subtiava");
INSERT INTO department VALUES (40, "Ventas", "San Felipe");

SELECT * FROM employee;
SELECT * FROM department;

-- 1. Mostrar   los   nombres   de   los   empleados   ordenadosalfabéticamente (Z...A)
SELECT name FROM employee ORDER BY name DESC; 

-- 2. Seleccionarelnombre,eloficioylalocalidaddelos departamentos donde trabajan los Vendedores.
SELECT * FROM department WHERE department_id = (SELECT department_id FROM employee WHERE job = "Vendedor" GROUP BY department_id);

-- 3. Listar los nombres de los empleados cuyo nombre termine conla letra ‘o’.
SELECT name FROM employee WHERE RIGHT(name,1) = "o"; 

-- 4. Seleccionar el nombre, el oficio y salario de los empleadosque trabajan en León.
SELECT name, job, salary FROM employee WHERE address = "Leon";

-- 5. Seleccionar el nombre, salario y localidad donde trabajande  los empleados que tengan un salario entre 10000 y 13000.
SELECT name, salary, address FROM employee WHERE salary >= 10000 AND salary <= 13000;

-- 6. Visualizar los departamentos con más de 2 empleados.
SELECT department.dep_name, count(employee.department_id)
FROM employee, department
WHERE employee.department_id = department.department_id
GROUP BY department.department_id 
HAVING COUNT(employee.department_id) >= 2;


-- 7. Mostrar el nombre, salario y nombre del departamento de losempleados   que   tengan   el   mismo   oficio   que   ‘Leonel   AlfonsoEsquivel’.
SELECT employee.name, employee.salary, department.dep_name FROM employee, department WHERE employee.department_id = department.department_id 
AND employee.job = (SELECT job FROM employee WHERE name = "Esquivel Leonel Alfonso");

-- 8. Mostrar el nombre, salario y nombre del departamento de losempleados que tengan el mismo oficio que “Castillo Montes Luis”y   que no tengan comisión.
SELECT employee.name, employee.salary, department.dep_name 
FROM employee, department 
WHERE commission = 0 
AND department.department_id = employee.department_id 
AND job = (SELECT job FROM employee WHERE name = "Castillo Montes Luis");

-- 9. Mostrar   los   datos   de   los   empleados   que   trabajan   en   eldepartamento de contabilidad, ordenados por nombre.
SELECT * FROM employee WHERE department_id = (SELECT department_id FROM department WHERE dep_name = "Contabilidad")
ORDER BY name;

-- 10. Nombre de los empleados que trabajan en León y cuyo oficiosea analista o empleado.
SELECT name FROM employee WHERE address = "Leon" AND (job = "Analista" OR job = "Empleado");

-- 11. Calcula el salario medio de todos los empleados.
SELECT AVG(salary) FROM employee;

-- 12. ¿Cuál   es   el   máximo   salario   de   los   empleados   deldepartamento 10?
SELECT MAX(salary) FROM employee;
SELECT MAX(salary) FROM employee WHERE department_id = 10;

-- 13. Calcula el salario mínimo de los empleados del departamento‘VENTAS’
SELECT MIN(salary) FROM employee WHERE department_id = (SELECT department_id FROM department WHERE dep_name = "Ventas");

-- 14. Calcula   el   promedio   del   salario   de   los   empleados   deldepartamento de ‘CONTABILIDAD’.
SELECT AVG(salary) FROM employee WHERE department_id = (SELECT department_id FROM department WHERE dep_name = "Contabilidad");

-- 15. ¿Cuántos empleados hay en el departamento número 10?
SELECT COUNT(*) FROM employee WHERE department_id = 10;

-- 16. ¿Cuántos empleados hay en el departamento de ‘VENTAS’?
SELECT COUNT(*) FROM employee WHERE department_id = (SELECT department_id FROM department WHERE dep_name = "Ventas");

-- 17. Calcula el número de empleados que no tienen comisión.
SELECT COUNT(*) FROM employee WHERE commission = 0;

-- 18. Visualizar cuántos nombres de los empleados empiezan por laletra ‘A’.
SELECT name FROM employee WHERE LEFT(name,1) = "A";

-- 19. Visualizar el número de empleados de cada departamento.
SELECT COUNT(employee.employee_id), dep_name FROM employee, department
WHERE department.department_id = employee.department_id
GROUP BY employee.department_id;

-- 20. Para cada oficio obtener la suma de salarios.
SELECT SUM(salary), job FROM employee GROUP BY job;

-- 21. Mostrar los datos de los empleados cuyo salario sea mayorque  la media de todos los salarios.
SELECT * FROM employee WHERE salary > (SELECT AVG(salary) FROM employee);

-- 22. Seleccionar   el   nombre   del   empleado   que   tiene   máximosalario.
SELECT name FROM employee WHERE salary = (SELECT MAX(salary) FROM employee);

-- 23. Mostrar el nombre del empleado que tiene el salario másbajo.
SELECT name FROM employee WHERE salary = (SELECT MIN(salary) FROM employee);

-- 24. Mostrar los datos del empleado que tiene el salario másalto en el departamento de ‘VENTAS’.
SELECT * FROM employee WHERE salary = (SELECT MAX(salary) FROM employee WHERE department_id = 
(SELECT department_id FROM department WHERE dep_name = "Ventas"))
AND; -- completar atando a que employee esté en ventas 

-- 25. Visualizar el departamento con más empleados.
SELECT dep_name FROM department WHERE department_id = 
(SELECT department_id FROM employee GROUP BY department_id ORDER BY COUNT(department_id) DESC LIMIT 1);

-- 26. Visualizar   el   número   de   departamento   que   tenga   másempleados cuyo oficio sea empleado.
SELECT department_id FROM employee WHERE job = "Empleado" GROUP BY department_id 
ORDER BY COUNT(department_id) LIMIT 1;

-- 27. Mostrar   el   número   de   oficios   distintos   de   cadadepartamento.
SELECT job, department_id FROM employee GROUP BY job, department_id;

-- 28. Mostrar los departamentos que tengan más de dos personastrabajando en la misma profesión.
SELECT job, department.dep_name FROM employee, department  
WHERE department.department_id = employee.department_id 
GROUP BY job, department.dep_name 
HAVING COUNT(job) > 2;


SELECT * FROM employee JOIN department ON department.department_id = employee.department_id;

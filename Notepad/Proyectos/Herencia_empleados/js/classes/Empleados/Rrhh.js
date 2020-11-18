function Rrhh(nombre, apellidos, dni, cargo){
	Empleado.call(this, nombre, apellidos, dni, cargo);
	this.sueldo = 1200;
};

Rrhh.prototype = Object.create(Empleado.prototype);
Rrhh.prototype.constructor = Rrhh;
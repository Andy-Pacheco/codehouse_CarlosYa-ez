function Ventas(nombre, apellidos, dni, cargo, ventas){
	Empleado.call(this, nombre, apellidos, dni, cargo);
	this.sueldo = 1500 + 70 * ventas;
	this.ventas = ventas;
};

Ventas.prototype = Object.create(Empleado.prototype);
Ventas.prototype.constructor = Ventas;
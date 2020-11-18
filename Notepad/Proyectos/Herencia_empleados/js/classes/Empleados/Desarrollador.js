function Desarrollador(nombre, apellidos, dni, cargo, horasBolsa, horasExtra){
	Empleado.call(this, nombre, apellidos, dni, cargo);
	this.sueldo = 15 * horasBolsa + 30 * horasExtra;
	this.horasB = horasBolsa;
	this.horasE = horasExtra;

};

Desarrollador.prototype = Object.create(Empleado.prototype);
Desarrollador.prototype.constructor = Desarrollador;
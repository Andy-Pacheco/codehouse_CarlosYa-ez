function Empleado(nombre, apellidos, dni, cargo){
	this.id = new Date().getTime()
	this.nombre = nombre;
	this.apellidos = apellidos;
	this.dni = dni;
	this.cargo = cargo;
}
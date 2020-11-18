function Profesor(nombre, asignatura){
	Persona.call(this, nombre);
	this.asignatura = asignatura;
	
	Profesor.prototype.verAsignatura = function(){
		console.log(`${this.nombre} enseña ${this.asignatura}`);
	}
	
}

// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
Profesor.prototype = Object.create(Persona.prototype);
// Establecer la propiedad "constructor" para referenciar a Estudiante
Profesor.prototype.constructor = Profesor;
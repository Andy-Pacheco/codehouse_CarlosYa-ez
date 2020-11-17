function Estudiante(nombre, notaMedia, asignaturaFavorita){
	Persona.call(this, nombre);
	this.notaMedia = notaMedia;
	this.asignaturaFavorita = asignaturaFavorita;

	Estudiante.prototype.getNotaMedia = function(){
		return this.notaMedia;
	}
	
	Estudiante.prototype.getAsignaturaFavorita = function(){
		return this.asignaturaFavorita;
	}
}

// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
Estudiante.prototype = Object.create(Persona.prototype);
// Establecer la propiedad "constructor" para referenciar a Estudiante
Estudiante.prototype.constructor = Estudiante;
function Estudiante(nombre, edad, estadoCivil, notaMedia){
	this.nombre = nombre;
	this.edad = edad;
	this.estadoCivil = estadoCivil;
	this.notaMedia = notaMedia;

	Estudiante.prototype.getNombre = function(){
		return this.nombre;
	}
	
	Estudiante.prototype.getEdad = function(){
		return this.edad;
	}
	
	Estudiante.prototype.getEstadoCivil = function(){
		return this.estadoCivil;
	}
	
	Estudiante.prototype.getNotaMedia = function(){
		return this.notaMedia;
	}
	
	Estudiante.prototype.setEdad = function(edad){
		this.edad = edad;
	}
	
	Estudiante.prototype.setNombre = function(nombre){
		this.nombre = nombre;
	}
	
	Estudiante.prototype.setEstadoCivil = function(estadoCivil){
		this.estadoCivil = estadoCivil;
	}
	
	Estudiante.prototype.setNotaMedia = function(notaMedia){
		this.notaMedia = notaMedia;
	}

}
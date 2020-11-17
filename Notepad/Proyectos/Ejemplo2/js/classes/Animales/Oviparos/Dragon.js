function Dragon(nombre, especie, colorPlumaje, numHuevos, cantidadOro){
	Oviparo.call(this, nombre, especie, colorPlumaje, numHuevos);
	this.cantidadOro = cantidadOro;
	
	Dragon.prototype.acumularOro = function(oro){
		this.cantidadOro += oro;
	}
	
	Dragon.prototype.getOro = function(oro){
		return this.cantidadOro;
	}
	
	//sobrecarga de un método: redefino un método que ya existe en la clase padre
	Dragon.prototype.getColorPlumaje = function(){
		return "No tiene plumaje, tiene escamas " + this.colorPlumaje;
	}
	
	//sobrecarga de un método: redefino un método que ya existe en la clase padre
	Dragon.prototype.toString = function(){
		return this.nombre + " tiene hambre y no hay nadie más por aquí";
	}
}

// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
Dragon.prototype = Object.create(Oviparo.prototype);
// Establecer la propiedad "constructor" para referenciar a Estudiante
Dragon.prototype.constructor = Dragon;
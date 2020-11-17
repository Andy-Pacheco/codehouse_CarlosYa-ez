function Oviparo (nombre, especie, colorPlumaje, numHuevos){
	Animal.call(this, nombre, especie);
	this.colorPlumaje = colorPlumaje;
	this.numHuevos = numHuevos;
	
	
	Oviparo.prototype.ponerHuevos = function(){
		console.log("Voy a poner " + this.numHuevos + " huevos");
	}
	
	Oviparo.prototype.getColorPlumaje = function(){
		return this.colorPlumaje;
	}
}

// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
Oviparo.prototype = Object.create(Animal.prototype);
// Establecer la propiedad "constructor" para referenciar a Estudiante
Oviparo.prototype.constructor = Oviparo;
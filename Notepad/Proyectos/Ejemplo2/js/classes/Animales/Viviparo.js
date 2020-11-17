function Viviparo(nombre, especie, numHijos, periodoGestacion){
	Animal.call(this, nombre, especie);
	this.numHijos = numHijos;
	this.periodoGestacion = periodoGestacion;
	
	Viviparo.prototype.parir = function(){
		console.log("Soy " + this.nombre + " y voy a parir " + this.numHijos + " a lo largo de mi vida");
	}
	
	Viviparo.prototype.getPeriodoGestacion = function(){
		console.log("Gesto durante " + this.periodoGestacion + " meses");
	}
	
}


// Creamos el objeto Estudiante.prototype que hereda desde Persona.prototype
Viviparo.prototype = Object.create(Animal.prototype);
// Establecer la propiedad "constructor" para referenciar a Estudiante
Viviparo.prototype.constructor = Viviparo;
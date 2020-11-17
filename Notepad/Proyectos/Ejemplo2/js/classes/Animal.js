function Animal(nombre, especie){
	this.nombre = nombre;
	this.especie = especie;
	
	
	Animal.prototype.getNombre = function(){
		return this.nombre;
	}
	
	Animal.prototype.getEspecie = function(){
		return this.especie;
	}
	
	Animal.prototype.darLaPatita = function(){
		console.log(this.nombre + " te da la patita");
	}
}
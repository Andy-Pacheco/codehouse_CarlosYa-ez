function Persona(nombre){
	this.nombre = nombre;
	
	Persona.prototype.caminar = function(){
		console.log("Estoy caminando");
	}
	
	Persona.prototype.saludar = function(){
		console.log("Hola soy " + this.nombre);
	}
}
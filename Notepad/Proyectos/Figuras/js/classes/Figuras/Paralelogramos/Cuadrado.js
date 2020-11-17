function Cuadrado(color, lado){
	Paralelogramo.call(this, color, lado, lado);
}

// Creamos el objeto Cuadrado.prototype que hereda desde Paralelogramo.prototype
Cuadrado.prototype = Object.create(Paralelogramo.prototype);
// Establecer la propiedad "constructor" para referenciar a Cuadrado
Cuadrado.prototype.constructor = Cuadrado;
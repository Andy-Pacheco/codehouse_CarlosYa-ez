function Circulo(color, radius){
	Figura.call(this, color);
	this.radius = radius;

	Circulo.prototype.getArea = function(){
		return Math.PI * this.radius * this.radius;
	}
	
	Circulo.prototype.getPerimeter = function(){
		return 2 * Math.PI * this.radius;
	}
}

// Creamos el objeto Circulo.prototype que hereda desde Figura.prototype
Circulo.prototype = Object.create(Figura.prototype);
// Establecer la propiedad "constructor" para referenciar a Circulo
Circulo.prototype.constructor = Circulo;

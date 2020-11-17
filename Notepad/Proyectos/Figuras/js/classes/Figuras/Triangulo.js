function Triangulo(color, base, altura){
	Figura.call(this, color);
	this.base = base;
	this.altura = altura;

	Triangulo.prototype.getArea = function(){
		return this.base * this.altura / 2;
	}
}

// Creamos el objeto Triangulo.prototype que hereda desde Figura.prototype
Triangulo.prototype = Object.create(Figura.prototype);
// Establecer la propiedad "constructor" para referenciar a Triangulo
Triangulo.prototype.constructor = Triangulo;
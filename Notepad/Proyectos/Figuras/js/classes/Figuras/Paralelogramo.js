function Paralelogramo(color, base, altura){
	Figura.call(this, color);
	this.base = base;
	this.altura = altura;	

	Paralelogramo.prototype.getArea = function(){
		return this.base * this.altura;
	}
	
	Paralelogramo.prototype.getPerimeter = function(){
		return 2 * this.base + 2 * this.altura;
	}
}

// Creamos el objeto Paralelogramo.prototype que hereda desde Figura.prototype
Paralelogramo.prototype = Object.create(Figura.prototype);
// Establecer la propiedad "constructor" para referenciar a Paralelogramo
Paralelogramo.prototype.constructor = Paralelogramo;
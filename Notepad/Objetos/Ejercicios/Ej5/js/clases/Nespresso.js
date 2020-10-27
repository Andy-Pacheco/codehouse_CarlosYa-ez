function Nespresso(capacidadMaxima, cantidadActual){
	
	this.capacidadMaxima = capacidadMaxima;
	if (this.capacidadMaxima == undefined){
		this.capacidadMaxima = 1000;
	}
	this.cantidadActual = cantidadActual < this.capacidadMaxima ? cantidadActual : this.capacidadMaxima;
	if (this.cantidadActual == undefined){
		this.cantidadActual = 0;
	}		
		
	Nespresso.prototype.fillUp = function(){
		this.cantidadActual = this.capacidadMaxima;
	}
	
	Nespresso.prototype.pourCoffee = function(amount){
		if (this.cantidadActual < amount){
			this.cantidadActual = 0;
		}
		else{
			this.cantidadActual -= amount;
		}
	}
	
	Nespresso.prototype.emptyCoffee = function(){
		this.cantidadActual = 0;
	}
	
	Nespresso.prototype.addCoffee = function(amount){
		this.cantidadActual += amount;
		this.cantidadActual = this.cantidadActual < this.capacidadMaxima ? this.cantidadActual : this.capacidadMaxima;
	}
		
}
	
function Television (precio = 100, color, consumo, peso, resolucion = 20, sintonizador){
	Electrodomestico.call(this,precio,color,consumo,peso);
	
	this.resolucion = resolucion;
	if (sintonizador != true && sintonizador !=false){
		this.sintonizador = false;
	}
	else{
		this.sintonizador = sintonizador;
	};
	
	Television.prototype.getResolucion = function (){
		return this.resolucion;
	};
	
	Television.prototype.getSintonizador = function (){
		return this.sintonizador;
	};
	
	if(this.getResolucion() > 40){
		this.precioFinal += this.precioFinal * 0.30;
	};
	
	if (this.getSintonizador()){
		this.precioFinal += 50;
	};
}
Television.prototype = Object.create(Electrodomestico.prototype);
Television.prototype.constructor = Television;
function Television(​precio = 100, color = "blanco", consumo = "F", ​peso = 5, resolucion = 20, sintonizador = false​){
	Electrodomestico.call(this, precio, color, consumo, peso);
	this.resolucion = resolucion;
	this.sintonizador = sintonizador;
	
	Television.prototype.getResolucion = function (){
		return this.resolucion;
	};
	
	Television.prototype.getSintonizador = function (){
		return this.sintonizador;
	};
	
	if(this.resolucion > 40){
		this.precioFinal = this.precioFinal * 1.30;
	};
	
	if (this.sintonizador){
		this.precioFinal += 50;
	};

Television.prototype = Object.create(Electrodomestico.prototype);
Television.prototype.constructor = Television;
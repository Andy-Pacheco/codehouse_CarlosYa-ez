function Lavadora(precio = 100, color, consumo, peso = 5, carga = 5){
	Electrodomestico.call(this, precio, color, consumo, peso);
	this.carga = carga;
	
	if (this.carga > 30){
		this.precioFinal += 50;
	};
	
	Lavadora.prototype.getCarga = function (){
		return this.carga;
	};

}
Lavadora.prototype = Object.create(Electrodomestico.prototype);
Lavadora.prototype.constructor = Lavadora;
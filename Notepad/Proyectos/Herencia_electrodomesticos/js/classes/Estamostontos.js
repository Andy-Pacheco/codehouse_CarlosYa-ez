function Estamostontos(valor){
	this.precio = (precio == "undefined") ? 100 : precio;
	
	
	
	if (comprobarConsumuEnergetico(consumo)){
		this.consumo = consumo;
	}
	else{
		this.consumo = "F";
	};
	
	this.peso = (peso == "undefined") ? 5 : peso;
	this.precioFinal = precioFinal();
	
	
	
	
	

	
	
	Electrodomestico.prototype.precioFinal = function(){
		let costePeso;
		switch(this.peso){
			case < 20:
				return costePeso = 10;
				break;
			case < 50:
				return costePeso = 50;
				break;
			case < 80:
				return costePeso = 80;
				break;
			default:
				return costePeso = 100;
		};				
		
		return this.precio + letras.this.consumo + costePeso;
	};
}
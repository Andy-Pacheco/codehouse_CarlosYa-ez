function Electrodomestico (precio = 100, color, consumo, peso = 5){
	this.precio = precio;
	
	this.consumo = consumo;
	this.peso = peso;	


	Electrodomestico.prototype.comprobarColor = function(color){
		return (typeof color == "string" && color != "")
	};
	
	if (this.comprobarColor(color)){
		this.color = color;
	}
	else{
		this.color = "Blanco";
	};
	
	let letras = ["A", "B", "C", "D", "E", "F"];
	let precios = [100, 80, 60, 50, 30, 10];
	Electrodomestico.prototype.comprobarConsumuEnergetico = function(consumo){
		return letras.includes(consumo);
	};
	
	if (this.comprobarConsumuEnergetico(consumo)){
		this.consumo = consumo;
	}
	else{
		this.consumo = "F";
	};
	
	
	Electrodomestico.prototype.precioFinal = function(){
		let costePeso;
		let x = this.peso;
		if (x < 20){
			costePeso = 10;
		}
		else if (x < 50){
			costePeso = 50;
		}
		else if (x < 80){
			costePeso = 80;
		}
		else{
			costePeso = 100;
		};
		
		return this.precio + precios[letras.indexOf(this.consumo)] + costePeso;
	};
	
	this.precioFinal = this.precioFinal();
	
	Electrodomestico.prototype.getPrecioFinal = function (){
		return this.precioFinal;
	};
}
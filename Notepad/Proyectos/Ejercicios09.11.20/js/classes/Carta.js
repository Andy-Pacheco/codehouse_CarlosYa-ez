console.log("Hola");

class Carta{
	constructor(number, suit, deal){
		this._number = number;
		this._suit = suit;
		this._deal = deal;
		this._id = this._suit + this._number;
	}
			
	get number(){
		return this._number;
	}
	
	get suit(){
		return this._suit;
	}
	
	get deal(){
		return this._deal;
	}
	
	get id(){
		return this._id;
	}
}

const ORO = 1;
const BASTOS = 2;
const COPAS = 3;
const ESPADAS = 4;
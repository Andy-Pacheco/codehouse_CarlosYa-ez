class Baraja{
	constructor(array){
		this._cartas = array;
	}

	get cartas(){
		return this._cartas;
	}
	
	shuffle(){
		let nuevaBaraja = [];
		while (nuevaBaraja.length < this._cartas.length){
			let cartaIndex = Math.floor(Math.random() * this._cartas.length);			
			let laTengo = false;
			for (let i = 0; i < nuevaBaraja.length && !laTengo; i++){
				if (nuevaBaraja[i].id == this._cartas[cartaIndex].id){
					laTengo = true;
				}
			}
			if (!laTengo){
				nuevaBaraja.push(this._cartas[cartaIndex])
			}
		}
		this._cartas = nuevaBaraja;
	}
	
	sortCards(){
		this._cartas.sort( (carta1, carta2) => carta1.id - carta2.id);
	}
	
	printCards(){
		for (let carta of this._cartas){
			let suit = carta.suit;
			let number = carta.number;
			switch(suit){
				case 1:
					suit = " de oros.";
					break;
				case 2:
					suit = " de bastos.";
					break;
				case 3:
					suit = " de copas.";
					break;
				case 4:
					suit = " de espadas.";
					break;
			}
			switch(number){
				case "01":
					number = "El as";
					break;
				case "02":
					number = "El dos";
					break;
				case "03":
					number = "El tres";
					break;
				case "04":
					number = "El cuatro";
					break;
				case "05":
					number = "El cinco";
					break;
				case "06":
					number = "El seis";
					break;
				case "07":
					number = "El siete";
					break;
				case "08":
					number = "La sota";
					break;
				case "09":
					number = "El caballo";
					break;
				case "10":
					number = "El rey";
					break;
			}
			console.log(number + suit);
		}
	}
				
					
			
}
	
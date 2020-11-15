class Baraja{
	constructor(array){
		this._cartas = array;
	}

	get cartas(){
		return this._cartas;
	}
	
	verCartas(){
		this._cartas.map ((carta) => console.log(carta.getCarta()));
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
	
	shuffle2(){
		this._cartas =  0;
	}
	
	sortCards(){
		this._cartas.sort( (carta1, carta2) => carta1.id - carta2.id);
	}		
}
	
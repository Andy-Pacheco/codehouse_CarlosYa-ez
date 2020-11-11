let edades = [23, 62, 45, 84, 2, 62, 81, 62, 34];

let filtroEdades = edades.filter((v) => v > 60);
console.log(filtroEdades);

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let cuadrados = numeros.map ((n) => Math.pow(n,2));

console.log(cuadrados);

let nombres = ["Juan", "Pedro", "Luis"];

let mayus = nombres.map ((name) => name.toUpperCase() );

console.log(mayus);

let mix = [ 1, 'a', '5', 4, 'x', '9', 7];

let filterMix = mix.filter ( (cosa) => !isNaN(cosa));

console.log(filterMix);

let filterMixParse = filterMix.map ( (n) => parseInt(n));
console.log(filterMixParse);

let nombres2 = ["pepe", "alberto", "juan", "rodrigo", "jose", "antonio"];

let nombresCortos = nombres2.filter ( (name) => name.length <= 4);

console.log(nombresCortos);

let numeros2 = [2.47895, 3.14159268, 5.699874, 8.574125];

let numerosCut = numeros2.map ((num) => parseFloat(num.toFixed(2)));

console.log(numerosCut);

//////////////////////////////////////////////////////////////

let cartas = [];
for (let i = 1; i <= 40; i++){
	let number = "0" + i % 10;
	if (number == "00"){
		number = "10";
	}
	
	if(i <= 10){
		cartas.push(new Carta(number, ORO, false));
	}
	else if(i > 10 && i <= 20){
		cartas.push(new Carta(number, BASTOS, false));
	}
	else if(i > 20 && i <= 30){
		cartas.push(new Carta(number, COPAS, false));
	}
	else{
		cartas.push(new Carta(number, ESPADAS, false));
	}
}

console.log(cartas);

let baraja1 = new Baraja(cartas);

baraja1.shuffle();
baraja1.sortCards();

console.log(baraja1.printCards());


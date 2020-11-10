/*
function suma(num1 = 1, num2 = 2, num3 = 0){
		return num1 + num2;
}

console.log(suma(10));

function sumarMuchasCosas(){
	console.log(arguments);
	let suma = 0;
	
	for (let i = 0; i < arguments.length; i++){
		suma += arguments[i];
	}
	
	return suma;

}

console.log(sumarMuchasCosas(5,2,6,9,11,90));

function sumarMuchasCosas2(...valores){
	console.log(valores);
	let suma = 0;
	
	for (let i = 0; i > valores.length; i++){
		suma += valores[i];
	}
	
	return suma;
}

console.log(sumarMuchasCosas2(5,2,7,4,7,8,3,6,8,4,1,6));

let datos = [5,2,3,6,9];
console.log(sumarMuchasCosas2(...datos));

function hacerCosas(){
	return "hago cosas todo el día";
}

console.log(hacerCosas());
console.log(hacerCosas);

let sumarDatos = function(a, b){
	return a + b;
}

console.log(sumarDatos);
console.log(sumarDatos(5, 2));

let restarDatos = function(a, b){
	return a - b;
}

function hacerCalculos(a, b, fSuma, fResta){
	console.log("Suma: " + fSuma(a, b));
	console.log("Suma: " + fResta(a, b));
}
hacerCalculos(3, 3, sumarDatos, restarDatos);


let saluteMorning = function(){
	return "Good Morning";
}

let saluteAfternoon = function(){
	return "Good Afternoon";
}

let saluteEvening = function(){
	return "Good Evening";
}

let saluteNight = function(){
	return "Good Night";
}

function salute(hour, fMorning, fAfternoon, fEvening, fNight){
	if (hour > 5 && hour <= 12){
		console.log(fMorning());
	}
	else if (hour > 12 && hour <= 17){
		console.log(fAfternoon());
	}
	else if (hour > 17 && hour <= 21){
		console.log(fEvening());
	}
	else if (hour > 21 || hour <= 5){
		console.log(fNight());
	}
}

console.log(saluteMorning());

salute(22, saluteMorning, saluteAfternoon, saluteEvening, saluteNight);

let par = (n1) => (n1 % 2 == 0) ? "es par" : "es impar";
console.log(par(2));
console.log(par(3));

let areaTriangulo = (base, altura) => base * altura / 2;

console.log(areaTriangulo(10,5));

let suma = (a, b) => a + b;
let resta = (a, b) => a - b;
let division = (a, b) => a / b;
let multiplicacion = (a, b) => a * b;

let operaciones = (n1, n2, fSuma, fResta, fMultiplicacion, fDivision) =>{
	console.log(fSuma(n1,n2));
	console.log(fResta(n1,n2));
	console.log(fMultiplicacion(n1,n2));
	console.log(fDivision(n1,n2));
}

operaciones(1, 2, suma, resta, multiplicacion, division);
*/

let trinum = (n1, n2, n3) =>{
	let texto = ""
	if (n1 == n2 + n3){
		texto = n1 + " = " + n2 + " + " + n3;
	}
	else if (n2 == n1 + n3){
		texto = n2 + " = " + n1 + " + " + n3;
	}
	else if (n3 == n2 + n1){
		texto = n3 + " = " + n2 + " + " + n1;
	}
	else{
		texto = "no se cumple nada";
	}
	return texto;
}

console.log(trinum(10, 17, 7));

let numeros = [8, 6, 1, 4 ,9, 2, 49, 2];

console.log(numeros.map((a) => 2 * a));
console.log(numeros);
	
//concatener todos los textos del array y devolverlos con un "," en medio
let textos = ["Andres", "Tomás", "Pedro", "Lucas", "Teo", "Luis"];

let concatenaTexto = textos.reduce((a,b) => a + " , " + b);
console.log(concatenaTexto);

let res = numeros.filter((v) => v % 2 == 0);
console.log(res);

let res5 = numeros.filter((v) => v >= 5);
console.log(res5);
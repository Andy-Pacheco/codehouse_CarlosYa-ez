let nombre = "Manolo";
let apellido = "Perez";

console.log(`${nombre} de la casa de ${apellido}`);

console.log(`${nombre} de la casa de ${apellido}`);

let info = ` Un texto 
definido
en 
varias lineas`;

document.write(`${info}`);

let tabla =`
	<table>
		<tr>
			<td>${nombre}</td>
			<td>${apellido}</td>
		</tr>
		
		<tr>
			<td>${apellido}</td>
			<td>${apellido}</td>
		</tr>
	</table>
`;

document.write(`${tabla}`);

let datos = [1, 2, 3, 4, 5, 6];

let [,,, ...misDatos] = datos;

console.log(misDatos);

let[,,num1,,num2,] = datos;
console.log(`${num1}`);
console.log(`${num2}`);


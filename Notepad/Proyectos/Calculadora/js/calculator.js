function addValue(n){
	off = false;
	changeScreen();
	if( document.getElementById("pantalla").value != "Error" &&
		document.getElementById("pantalla").value != "nooo!!!" &&
		document.getElementById("pantalla").value.length < 9){
		document.getElementById("pantalla").value += n;
	}
	
}

function clearScreen(){
	off = false;
	changeScreen();
	document.getElementById("pantalla").value = "";
}

function operate(){
	off = false;
	changeScreen();
	let operation = document.getElementById("pantalla").value;	
	let operator = "";
	let num1;
	let num2;
	
	for (let i = 1; i < operation.length && operator == ""; i++){
		if (isNaN(operation[i])){
			operator = operation[i];
			num1 = operation.slice(0, i);
			num2 = operation.slice(i + 1);
		}
	}
	
	if (checkError(num1, num2, operator)){
		operation = "Error";
	}
	else{
		operation = calculation(parseInt(num1), parseInt(num2), operator);
		
	}
	
	document.getElementById("pantalla").value = operation;
}

function calculation(num1, num2, operator){
	let result = "";
	switch(operator){
		case "+":
			result = num1 + num2;
			break;
		case "-":
			result = num1 - num2;
			break;
		case "/":
			if(num2 != 0){
				result = num1 / num2;
			}
			else{
				result = "nooo!!!";
			}
			break;
		case "*":
			result = num1 * num2;
			break;
	}
	return result;
}

function checkError(num1, num2, operator){
	let error = false;
	if(isNaN(num1) || isNaN(num2) || operator == ""){
		error = true;
	}
	return error;
}

function turnOff(){
	off = true;
	changeScreen();
}

function changeScreen(){
	if (off){
		clearScreen();
		document.getElementById("pantalla").style.backgroundColor = "#4f7165";
	}
	else{
		document.getElementById("pantalla").style.backgroundColor = "#b6d1c2";
	}
}

let off = true;
	
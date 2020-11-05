function addValue(n){
	document.getElementById("pantalla").value += n;
}

function clearScreen(){
	document.getElementById("pantalla").value = "";
}

function operate(){
	let operation = parseInt(document.getElementById("pantalla").value);
	console.log(operation);
	
	
	document.getElementById("pantalla").value = operation;
}
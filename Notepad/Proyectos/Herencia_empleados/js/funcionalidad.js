function changeFormulario(){
	let empleado = document.getElementById("empleado").value;
	
	if (empleado == "Rrhh"){
		document.getElementById("fhorasB").disabled = true;
		document.getElementById("fhorasE").disabled = true;
		document.getElementById("fventas").disabled = true;
		document.getElementById("fhorasB").value = "";
		document.getElementById("fhorasE").value = "";
		document.getElementById("fventas").value = "";
	}
	else if(empleado == "Desarrollador"){
		document.getElementById("fhorasB").disabled = false;
		document.getElementById("fhorasE").disabled = false;
		document.getElementById("fventas").disabled = true;
		document.getElementById("fventas").value = "";
	}
	else{
		document.getElementById("fhorasB").disabled = true;
		document.getElementById("fhorasB").value = "";
		document.getElementById("fhorasE").disabled = true;
		document.getElementById("fhorasE").value = "";
		document.getElementById("fventas").disabled = false;
	};
};

function createEmpleado(){
	
	let empleado = document.getElementById("empleado").value;
	let name = document.getElementById("fname").value;
	let lastName = document.getElementById("flast").value;
	let dni = document.getElementById("fdni").value;
	let cargo = document.getElementById("fcargo").value;
	let horasBase = document.getElementById("fhorasB").value;
	let horasExtra = document.getElementById("fhorasE").value;
	let ventas = document.getElementById("fventas").value;
		
	if (empleado == "Rrhh"){
		personaje =  new Rrhh(name, lastName, dni, cargo);

	}
	else if(empleado == "Desarrollador"){
		personaje =  new Desarrollador(name, lastName, dni, cargo, horasBase,
											horasExtra);
	}
	else{
		personaje =  new Ventas(name, lastName, dni, cargo, ventas);

	};
	personajes.push(personaje);
	document.getElementById("empleadoForm").reset();
	changeFormulario();
	paintEmpleado();
};

function paintEmpleado(){
	
	let tr = document.createElement("tr");
	tr.id = personaje.id;
	
	let tdName = document.createElement("td");
	tdName.innerHTML = personaje.nombre + " " + personaje.apellidos;
	tr.appendChild(tdName);
	
	let tdCargo = document.createElement("td");
	tdCargo.innerHTML = personaje.cargo;
	tr.appendChild(tdCargo);
	
	let tdSueldo = document.createElement("td");
	tdSueldo.innerHTML = personaje.sueldo;
	tr.appendChild(tdSueldo);
	
	let tdButtons = document.createElement("td");
	let deleteButton = document.createElement("button");
	deleteButton.id = personaje.id;
	deleteButton.innerHTML = "Despedido";
	deleteButton.onclick = function(){
		despedir(this.id);
	}
	tdButtons.appendChild(deleteButton);
	
	let editButton = document.createElement("button");
	editButton.id = personaje.id;
	editButton.innerHTML = "Editar";
	editButton.onclick = function(){
		editSueldo(this.id);
	}
	tdButtons.appendChild(editButton);
	tr.appendChild(tdButtons);
	
	document.getElementById("employees").appendChild(tr);
};

function despedir(id){
	let deleted = document.getElementById(`${id}`);
	deleted.parentNode.removeChild(deleted);
	let pos = -1;
	for (let i = 0; i < personajes.length && pos == -1; i++){
		if (personajes[i].id == id){
			pos = i;
		}
	}
	
	if (pos != -1){
		personajes.splice(pos, 1);
	}
}

function editSueldo(id){
	for (let personaje of personajes){
		if (personaje.id == id){
			vomitaDatos(personaje);
		}
	}
}

function vomitaDatos(personaje){

	document.getElementById("fname").value = personaje.nombre;
	document.getElementById("flast").value = personaje.apellidos;
	document.getElementById("fdni").value = personaje.dni;
	document.getElementById("fcargo").value = personaje.cargo;
	document.getElementById("fhorasB").value = personaje.horasB;
	document.getElementById("fhorasE").value = personaje.horasE;
	document.getElementById("fventas").value = personaje.ventas;
	if (personaje.horasB == null && personaje.ventas == null){
		document.getElementById("empleado").value = "Rrhh";
	}
	else if(personaje.ventas == null){
		document.getElementById("empleado").value = "Desarrollador";
	}
	else{
		document.getElementById("empleado").value = "Ventas";
	}
	changeFormulario();
	
	despedir(personaje.id);
}

let readProductData = () => {
	let name = document.getElementById("name").value;
	let price = document.getElementById("price").value;
	let amount = document.getElementById("amount").value;
	let category = document.getElementById("category").value;
	let color = document.getElementById("color").value;
	
	let newProduct = null;
	
	if (editingProductId == null) {
		newProduct = {
			id: new Date().getTime(),
			name: name,
			price: price,
			amount: amount,
			category: category,
			color: color
		}
		
		products.push(newProduct);
	}
	else {		
		for (let p of products){
			if (p.id == editingProductId){
				p.name = name;
				p.price = price;
				p.amount = amount;
				p.category = category;
				p.color = color;
			}
		}
		
		editingProductId = null;
	}
	
	document.getElementById("productForm").reset();
	
	paintProducts();		
}

function paintProducts(){
	document.getElementById("products").innerHTML = "";
	
	for (let p of products){
		paintProductData(p);
	}	
}


let paintProductData = function (newProduct){
	
	let tr = document.createElement("tr");
	
	let tdName = document.createElement("td");
	tdName.innerHTML = newProduct.name;
	tr.appendChild(tdName);
	
	let tdPrice = document.createElement("td");
	tdPrice.innerHTML = newProduct.price;
	tr.appendChild(tdPrice);
	
	let tdAmount = document.createElement("td");
	tdAmount.innerHTML = newProduct.amount;
	tr.appendChild(tdAmount);
	
	let tdCategory = document.createElement("td");
	tdCategory.innerHTML = newProduct.category;
	tr.appendChild(tdCategory);
	
	let tdColor = document.createElement("td");
	tdColor.style.backgroundColor = newProduct.color;
	tdColor.style.width = "20px";
	tr.appendChild(tdColor);
	
	let tdButtons = document.createElement("td");
	
	let deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Borrar";
	deleteButton.onclick = function(){
		deleteProduct(newProduct.id);
	}
	
	tdButtons.appendChild(deleteButton);
	
	let editButton = document.createElement("button");
	editButton.innerHTML = "Editar";
	editButton.onclick = function(){
		editProduct(newProduct.id);
	}
	
	tdButtons.appendChild(editButton);
		
	tr.appendChild(tdButtons);
		
	document.getElementById("products").appendChild(tr);
	
	
}

function editProduct(id){
	
	for (let p of products){
		if (p.id == id){
			editingProductId = id;
			showInForm(p);
		}
	}
	
	
}

function showInForm(prod){
	document.getElementById("name").value = prod.name;
	document.getElementById("price").value = prod.price;
	document.getElementById("amount").value = prod.amount;
	document.getElementById("category").value = prod.category;
	document.getElementById("color").value = prod.color;	
}


function deleteProduct(id){
	let pos = -1;
	for (let i = 0; i < products.length && pos == -1; i++){
		if (products[i].id == id){
			pos = i;
		}
	}
	
	if (pos != -1){
		products.splice(pos, 1);
	}
	
	paintProducts();
}



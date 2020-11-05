function readProductData(){
	let name = document.getElementById("name").value;
	let price = document.getElementById("price").value;
	let category = document.getElementById("category").value;
	let color = document.getElementById("color").value;
	let amount = document.getElementById("amount").value;

	console.log(name);
	console.log(price);
	console.log(category);
	console.log(color);
	console.log(amount);
	
	let newProduct = new Product(name, price, amount, category, color);

	paintProductData(newProduct)
}

function paintProductData(newProduct){
	
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
	tdColor.innerHTML = newProduct.color;
	tr.appendChild(tdColor);
	
	document.getElementById("products").appendChild(tr);
	
}
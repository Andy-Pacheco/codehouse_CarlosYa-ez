function Person(dni){
	this.dni = dni;
	this.cuentas = [];
	
	Person.prototype.addAccount = function(cuenta){
		if (this.cuentas.length < 3){
			this.cuentas.push(cuenta);
		}
	}
	
	Person.prototype.getMoroso = function(){
		this.moroso = false;
		for (i = 0; i < this.cuentas.length && !this.moroso; i++){
			
			if (this.cuentas[i].getMoney() < 0){
				this.moroso = true;
			}
		}
		return this.moroso;
	}
				
}
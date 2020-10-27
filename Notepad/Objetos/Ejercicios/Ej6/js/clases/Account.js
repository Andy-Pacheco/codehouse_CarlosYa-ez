function Account(number, money){
	this.number = number;
	this.money = money;
	
	Account.prototype.getMoney = function(){
		return this.money;
	}
	
	Account.prototype.deposit = function(amount){
		this.money += amount;
	}
	
	Account.prototype.withdraw = function(amount){
		this.money -= amount;
	}
}
function Film (jFilm, name, director, releasedYear, category){
	
	this.borrowed = false;
	
	if (jFilm == null) {
		this.name = name;
		this.director = director;
		this.releasedYear = releasedYear;
		this.category = category;
	}
	else {
		this.name = jFilm.name;
		this.director = jFilm.director;
		this.releasedYear = jFilm.releasedYear;
		this.category = jFilm.category;
	}
	
	
	Film.prototype.setReleasedYear = function(y){
		this.releasedYear = y;
	}
	
	Film.prototype.borrowFilm = function(){
		this.borrowed = true;
	}
	
	Film.prototype.returnFilm = function(){
		this.borrowed = false;
	}
	
	Film.prototype.isBorrowed = function(){
		return this.borrowed;
	}
	
	Film.prototype.showFilmInfo = function(){
		return this.name + " - " + this.director + " - " + this.releasedYear + 
			" - " + this.getCategoryName(this.category);  
	}
	
	Film.prototype.getCategoryName = function(category){
		let text = "";
		
		switch(category){
			case Film.CATEGORY_DRAMA: 
				text = "Drama";
				break;
			case Film.CATEGORY_COMEDY: 
				text = "Comedia";
				break;
			case Film.CATEGORY_ACTION: 
				text = "Acción";
				break;
			case Film.CATEGORY_INDIE: 
				text = "Independiente";
				break;
			case Film.CATEGORY_TERROR: 
				text = "Terror";
				break;
		}
		
		return text;
	}
	
	Film.prototype.toJSONObject = function(){
		let jFilm ={};
		jFilm.name = this.name;
		jFilm.director = this.director;
		jFilm.releasedYear = this.releasedYear;
		jFilm.category = this.category;
		jFilm.borrowed = this.borrowed;
	
		return jFilm;
	}
}

Film.CATEGORY_DRAMA = 1;
Film.CATEGORY_COMEDY = 2;
Film.CATEGORY_ACTION = 3;
Film.CATEGORY_INDIE = 4;
Film.CATEGORY_TERROR = 5;



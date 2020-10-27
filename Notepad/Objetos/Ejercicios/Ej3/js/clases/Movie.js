function Movie(name, director, releasedYear, category){

	this.name = name;
	this.director = director;
	this.releasedYear = releasedYear;
	this.category = category;
	this.borrowed = false;	
	
	Movie.prototype.setReleasedYear = function(year){
		this.releasedYear = year;
	}
	
	Movie.prototype.borrowMovie = function(){
		this.borrowed = true;
	}
	
	Movie.prototype.returnMovie = function(){
		this.borrowed = false;
	}
	
	Movie.prototype.isBorrowed = function(){
		return this.borrowed;
	}
	
	Movie.prototype.showMovieInfo = function(){
		return this.name + " - " + this.director + " - " + this.releasedYear + 
			" - " + this.getCategoryName(this.category);
	}
	
	Movie.prototype.getCategoryName = function(category){
		let text = "";
		
		switch(category){
			case Movie.CATEGORY_DRAMA:
				text = "Drama";
				break;
			case Movie.CATEGORY_COMEDY:
				text = "Comedy";
				break;
			case Movie.CATEGORY_ACTION:
				text = "Action";
				break;
			case Movie.CATEGORY_INDIE:
				text = "Indie";
				break;
			case Movie.CATEGORY_TERROR:
				text = "Terror";
				break;
		}
		return text;
	}
}

Movie.CATEGORY_DRAMA = 1;
Movie.CATEGORY_COMEDY = 2;
Movie.CATEGORY_ACTION = 3;
Movie.CATEGORY_INDIE = 4;
Movie.CATEGORY_TERROR = 5;

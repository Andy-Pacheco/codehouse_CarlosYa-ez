function Song(title, group, duration, rating){
	this.title = title;
	this.group = group;
	this.duration = duration;
	this.rating = rating;
	
	Song.prototype.print = function(){
		return "La canción " + this.title + " me encanta y en Apple solo le dan " +
			+ this.rating + " estrellas."
	}
	
	Song.prototype.getDuration = function(){
		return this.duration;
	}
	
	Song.prototype.getGroup = function(){
		return this.group;
	}
	
	Song.prototype.getRating = function(){
		return this.rating;
	}
}


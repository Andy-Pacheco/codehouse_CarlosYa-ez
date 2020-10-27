function Book(title, author){
	this.title = title;
	this.author = author;
	
	Book.prototype.getTitle = function(){
		return this.title;
	}
	
	Book.prototype.getAuthor = function(){
		return this.author;
	}
	
	Book.prototype.setTitle = function(title){
		this.title = title
	}
	
	Book.prototype.setAuthor = function(author){
		this.author = author;
	}
}
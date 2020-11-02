function Book(jBook, title, author){
	
	if(jBook == null){
		this.title = title;
		this.author = author;
	}
	else {
		this.title = jBook.title;
		this.author = jBook.author;
	}
	
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
	
	Book.prototype.toJSONObject = function(author){
		let jBook = {};
		
		jBook.title = this.title;
		jBook.author = this.author;
		
		return jBook;
	}
}
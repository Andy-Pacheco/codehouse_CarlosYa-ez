class Netflix {
	constructor(jNetflix, userName, pass, episodes){
		if(jNetflix == null){
			this._userName = userName;
			this._pass = pass;
			this._episodes = episodes;
			this._lastWatched = null;
			this._duration = 0;
		}
		else{
			this._userName = jNetflix.userName;
			this._pass = jNetflix.pass;
			this._episodes = jNetflix.episodes;
			this._duration = jNetflix.duration;
			this._lastWatched = jNetflix.lastWatched;
		}
		
	}
	
	get userName(){
		return this._userName;
	}
	
	get pass(){
		return this._pass;
	}
	
	get episodes(){
		return this._episodes;
	}
	
	set userName(userName){
		this._userName = userName;
	}
	
	set pass(pass){
		this._pass = pass;
	}
	
	set episodes(episodes){
		this._episodes = episodes;
	}
	
	sumDuration(){ // y sigue sin funcionar...sdlkifnsdfoigdfiousdfvgkncccgck
		this._duration = 0;
		for (let i = 0; i < this._episodes.length; i++){
			duration += this._episodes[i].duration;
		}
		return this._duration;
	}
	
	get duration(){ //por tanto este tampoco...
		this._duration = this.sumDuration();
		return this._duration;
	}
	
	get lastWatched(){ //no hay manera tampoco...
		if (this._lastWatched != null){
			return this._epìsodes[this._lastWatched];
		}
	}
	
	play(){
		this._lastWatched ++;		
		if (this._lastWatched >= this._episodes.length){
			this._lastWatched = 0;
		}
	}		
	
	addEpisode(episode){
		this._episodes.push(episode);
		this._duration = this.sumDuration();
	}
	
	removeEpisode(episode){
		let index = null;
		for (let i = 0; i < this._episodes.length && index == null; i++){
			if (this._episodes[i] == episode){
				index = i;
			}
		}
		this._episodes.splice(index);
		this._duration = this.sumDuration();
	}
	
	toJSONObject(){
		let jNetflix = {};
		jNetflix.userName = this._userName;
		jNetflix.pass = this._pass;
		jNetflix.episodes = this._episodes;
		jNetflix.duration = this._duration;
		jNetflix.lastWatched = this._lastWatched;
		return jEpisode;
	}
	
	
	
	
}
class Netflix {
	constructor(jNetflix, userName, pass, episodes){
		if(jNetflix == null){
			this._userName = userName;
			this._pass = pass;
			this._episodes = episodes;
			this._lastWatched = -1;
			this._duration = 0;
		}
		else{
			this._userName = jNetflix.userName;
			this._pass = jNetflix.pass;
			let jEpisodes = jNetflix.episodes;
			for (let jEpisode of jEpisodes){
				let episode = new Episode(jEpisode);
				this._episodes.push(episode);
			}
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
			this._duration += this._episodes[i].duration;
		}
		return this._duration;
	}
	
	get duration(){ //este tampoco...
		this._duration = this.sumDuration();
		return this._duration;
	}
	
	get lastWatched(){ 
		if (this._lastWatched != -1){
			return this._episodes[this._lastWatched].series + ", " +
			this._episodes[this._lastWatched].name + " (" +
			this._episodes[this._lastWatched].getPosition() + ")";
		}
	}
	
	play(){
		this._lastWatched ++;
		console.log("Reproduciendo capítulo... ");
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
	
	orderByDuration(){
		this._episodes.sort(
			function (a, b) {
				return b.duration - a.duration;
			}
		);
		return this._episodes;
	}
	
	toJSONObject(){
		let jNetflix = {};
		jNetflix.userName = this._userName;
		jNetflix.pass = this._pass;
		
		let jEpisodes = []
		for (let episode of this._episodes){
			let jEpisode = episode.toJSONObject();
			jEpisodes.push(jEpisode);
		}
		
		jNetflix.duration = this._duration;
		jNetflix.lastWatched = this._lastWatched;
		return jEpisode;
	}
	
	
	
	
}
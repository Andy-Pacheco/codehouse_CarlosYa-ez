class Episode{
	constructor(jEpisode, name, series, season, position, genre, duration){
		if(jEpisode == null){
			this._name = name;
			this._series = series;
			this._season = season;
			this._position = position;
			this._genre = genre;
			this._duration = duration;
		}
		else{
			this._name = jEpisode.name;
			this._series = jEpisode.series;
			this._season = jEpisode.season;
			this._position = jEpisode.position;
			this._genre = jEpisode.genre;
			this._duration = jEpisode.duration;
		}
	}
	
	get name() {
		return this._name;
	}
	
	get series() {
		return this._series;
	}
	
	get	season() {
		return this._season;
	}
	
	get position() {
		return this._position;
	}
	
	get genre() {
		return this._genre;
	}
	
	get duration() {
		return this._duration;
	}
	
	set name(name) {
		this._name = name;
	}
	
	set series(series) {
		this._series = series;
	}
	
	set	season(season) {
		this._season = season;
	}
	
	set position(position) {
		this._position = position;
	}
	
	set genre(genre) {
		this._genre = genre;
	}
	
	set duration(duration) {
		this._duration = duration;
	}
	
	toJSONObject(){
		let jEpisode = {};
		jEpisode.name = this._name;
		jEpisode.series = this._series;
		jEpisode.season = this._season;
		jEpisode.position = this._position;
		jEpisode.genre = this._genre;
		jEpisode.duration = this._duration;
		
		return jEpisode;
	}
}
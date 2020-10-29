function Playlist(){
	this.songs = [];
	this.shuffled = false;
	this.shuffledSongs = [];
	this.currentSong = -1;
	
	Playlist.prototype.addSong = function(song){
		this.songs.push(song);
	}
	
	Playlist.prototype.getDuration = function(){
		this.duration = 0;
		for (song of this.songs){
			this.duration += song.getDuration();
		}
	}
	
	Playlist.prototype.removeSong = function(song){
		this.songs.splice(this.songs.indexOf(song),1);
	}

	Playlist.prototype.shuffle = function(){
		this.shuffled = true;
		let randnum = [];
		this.shuffledSongs = [];
		while (randnum.length < this.songs.length){
			let num = Math.floor(Math.random() * this.songs.length);
			if (randnum.indexOf(num) == -1){
				randnum.push(num);
			}
		}
		for (num of randnum){
			this.shuffledSongs.push(this.songs[num]);
		}
		return this.shuffledSongs;
	}
	
	Playlist.prototype.unShuffle = function(){
		this.shuffled = false;
	}
	
	Playlist.prototype.nextSong = function(){
		if (this.shuffled){
			this.currentSong = Math.floor(Math.random() * this.songs.length)
		}
		else {
			this.currentSong = (this.currentSong + 1) % this.songs.length; 
		}
		return this.songs[this.currentSong];
	}
	
	Playlist.prototype.topGroups = function(){
		let groups = []
		let contadores = []
		for (let i = 0; i < this.songs.length; i++){
			if (groups.indexOf(this.songs[i].getGroup()) == -1){
				groups.push(this.songs[i].getGroup());
				contadores.push(1);
			}
			else {
				contadores[groups.indexOf(this.songs[i].getGroup())]++;
			}
		}
		//console.log(groups);
		//console.log(contadores);
		let swap = true;
		while (swap){
			swap = false;
			for (i = 0; i < groups.length - 1; i++){
				let pivote;
				if (contadores[i] < contadores[i + 1]){
					pivote = contadores[i + 1];
					contadores[i + 1] = contadores[i];
					contadores[i] = pivote;
					pivote = groups[i + 1];
					groups[i + 1] = groups[i];
					groups[i] = pivote;
					swap = true;
				}
			}
		}
		//console.log(groups);
		//console.log(contadores);
		if (groups.length > 5){
			groups = groups.splice(0, 5);
		}
		return groups;
	}
	
	Playlist.prototype.orderByDuration = function(){
		let durations = [];
		for (song of this.songs){
			durations.push(song);
		}
		let swap = true;
		while (swap){
			swap = false;
			for (i = 0; i < durations.length - 1; i++){
				let pivote;
				if (durations[i].getDuration() < durations[i + 1].getDuration()){
					pivote = durations[i + 1];
					durations[i + 1] = durations[i];
					durations[i] = pivote;
					swap = true;
				}
			}
		}
		return durations;
	}
		
			

				
}
		
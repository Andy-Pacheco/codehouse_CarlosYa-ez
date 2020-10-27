function LoudSpeaker(){
	this.on = false;
	this.volume = 0;
	
	LoudSpeaker.prototype.turnOn = function(){
		this.on = true;
		this.volume = 20;
	}
	
	LoudSpeaker.prototype.turnOff = function(){
		this.on = false;
		this.volume = 0;
	}
	
	LoudSpeaker.prototype.getVolume = function(){
		return this.volume;
	}
	
	LoudSpeaker.prototype.turnUpVolume = function(){
		if (this.volume < LoudSpeaker.MAX_VOLUME){
			this.volume++;
		}
	}
	
	LoudSpeaker.prototype.turnDownVolume = function(){
		if (this.volume > LoudSpeaker.MIN_VOLUME){
			this.volume--;
		}
	}
	
	LoudSpeaker.prototype.setVolume = function(volume){
		if (volume > LoudSpeaker.MIN_VOLUME && volume < LoudSpeaker.MAX_VOLUME){
			this.volume = volume;
		}
	}
	
	LoudSpeaker.prototype.mute = function(){
		this.volume = LoudSpeaker.MIN_VOLUME;
	}
	
	LoudSpeaker.prototype.print = function(){
		let texto = this.on ? "encendido": "apagado";
		return "El altavoz está " + texto + " y su volumen es de " + this.volume;  
	}
}

LoudSpeaker.MAX_VOLUME = 100;
LoudSpeaker.MIN_VOLUME = 0;
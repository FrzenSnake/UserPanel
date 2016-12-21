class Jewel {
	isInteam:boolean=false;

	level = 1;
	quality:number=2.8;

	public constructor(level:number,quality:number) {

		level=this.level;
		quality=this.quality;
	}

	get attack(){
        var result = this.level*(10+this.quality);
		console.log("jewel+:"+result)
		return result;
	}
	get attackSpeed(){
		var result=this.level*(1.1+this.quality*0.1);
		return result;
	}
	
    get dodge(){
	var result=0.01+this.level*0.02+this.quality*0.002;
	return result;
    }

	get fightPower(){
        return this.getFightPower();
	}

	getFightPower(){
		return this.attack*1.8*this.attackSpeed+this.dodge*20;
	}
	
}
class Equipment {
	isInteam:boolean=false;

	jewels:Jewel[]=[];

	level = 2;

	quality:number=1.8;

    properties:Properties;
	public constructor(jewels:Jewel[],level:number,quality:number) {
	
		jewels=this.jewels;
		level=this.level;
		quality=this.quality;
		this.properties = new Properties();

		this.properties.all.push(new Property("攻击力",this.attack))
		this.properties.all.push(new Property("攻击速度",this.attackSpeed))
		this.properties.all.push(new Property("等级",this.level))
		this.properties.all.push(new Property("品质",this.quality))
		this.properties.all.push(new Property("闪避系数",this.dodge))
	}

	get attack(){
		var result=0;
		this.jewels.forEach( e => result += e.attack);
		console.log("equipment+:"+result)
		return result+this.level*(10+this.quality);
	}

	get attackSpeed(){
		var result = 0;
		this.jewels.forEach(e => result += e.attackSpeed);
		return result+this.level*(1.1+this.quality*0.1);
	}
	
    get dodge(){
	var result=0
	this.jewels.forEach(e=>result +=e.dodge);
	return result+0.01+this.level*0.02+this.quality*0.002;
    }

	get fightPower(){
        return this.getFightPower();
	}

	getFightPower(){
		var result=0;
		this.jewels.forEach(e=>result += e.fightPower);
		return result+this.attack*1.8*this.attackSpeed+this.dodge*20;
	}
	
	
}
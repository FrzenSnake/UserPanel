
class Hero {

	isInteam:boolean=false;

	equipments:Equipment[]=[];

	hp=100;

	level = 3;

	quality:number=2.8;

    properties:Properties;

	public constructor(equipments:Equipment[],hp:number,level:number,quality:number) {
		
		equipments=this.equipments;
		hp=this.hp;
		level=this.level;
		quality=this.quality;
		this.properties = new Properties();
		this.properties.all.push(new Property("攻击力",this.attack))
		this.properties.all.push(new Property("攻击速度",this.attackSpeed))
		this.properties.all.push(new Property("生命值",this.hp))
		this.properties.all.push(new Property("等级",this.level))
		this.properties.all.push(new Property("品质",this.quality))
		this.properties.all.push(new Property("最大生命值",this.maxHp))
		this.properties.all.push(new Property("闪避系数",this.dodge))
	}

	get maxHp(){
		return this.level*100;
	}
	
	get attack(){
		var result=0;
		this.equipments.forEach(e=>result += e.attack);
		console.log("hero+:"+result)
		return result+this.level*(10+this.quality);

	}
	get attackSpeed(){
		var result=0;
		this.equipments.forEach(e=>result += e.attackSpeed);
		return result+this.level*(1.1+this.quality*0.1);
	}
	
    get dodge(){
	var result=0
	this.equipments.forEach(e=>result +=e.dodge);
	return result+0.01+this.level*0.02+this.quality*0.002;
    }


    get fightPower(){
        return this.getFightPower();
	}

	getFightPower(){
		var result=0;
		this.equipments.forEach(e=>result += e.fightPower);
		return result+this.maxHp*1.5+this.attack*1.8*this.attackSpeed+this.dodge*20;
	}
	

}
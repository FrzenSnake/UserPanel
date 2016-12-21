var Cache:MethodDecorator=(target:any,propertyName,desc:PropertyDescriptor)=>
{
    const getter=desc.get;

	var cacheKey = "__cache"+propertyName;

    desc.get = function(){
        if(!this[cacheKey]){
			return getter.apply(this);
		}
		console.log(this[cacheKey]);
    }
    return desc;
}

class User {
	health=100;
	mana=50;
	gold=0;
	exp=0;
	level=0;
	heros:Hero[]=[];
	__heroesInTeam:Hero[]=[];

public constructor(health:number,mana:number,gold:number,exp:number,level:number,heros:Hero[]) {
	health=this.health;
	mana=this.mana;
	gold=this.gold;
	exp=this.exp;
	level=this.level;
	heros=this.heros;
}
	@Cache
	get herosInTeam(){
		return this.heros.filter(hero=>hero.isInteam);
	}
    @Cache
    get fightPower(){
        return this.getFightPower();
	}
	@Cache
    get totalExp(){
		var result=this.level*1000;
		return result;
	}
	@Cache
	get maxHp(){
		return this.level*100;
	}
	@Cache
	get maxMana(){
		return this.level*300;
	}
	@Cache
	get attack(){
		var result=0;
		this.heros.forEach(e=>result +=e.attack);
		return result+this.level*10;
	}
	@Cache
	get attackSpeed(){
	var result=1.1
	this.heros.forEach(e=>result+=e.attackSpeed);
	return result+this.level*1.1;
	}
	@Cache
    get dodge(){
	var result=1.1
	this.heros.forEach(e=>result+=e.dodge);
	return result+this.level*0.001;
    }

	getFightPower(){
	    var result=0;
		this.heros.forEach(e=>result += e.fightPower);
		return result+this.health*1.5+this.mana+this.attack*1.8*this.attackSpeed+this.dodge*20;
	}

}
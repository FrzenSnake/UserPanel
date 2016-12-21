var Hero = (function () {
    function Hero(equipments, hp, level, quality) {
        this.isInteam = false;
        this.equipments = [];
        this.hp = 100;
        this.level = 3;
        this.quality = 2.8;
        equipments = this.equipments;
        hp = this.hp;
        level = this.level;
        quality = this.quality;
        this.properties = new Properties();
        this.properties.all.push(new Property("攻击力", this.attack));
        this.properties.all.push(new Property("攻击速度", this.attackSpeed));
        this.properties.all.push(new Property("生命值", this.hp));
        this.properties.all.push(new Property("等级", this.level));
        this.properties.all.push(new Property("品质", this.quality));
        this.properties.all.push(new Property("最大生命值", this.maxHp));
        this.properties.all.push(new Property("闪避系数", this.dodge));
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "maxHp"
        ,function () {
            return this.level * 100;
        }
    );
    d(p, "attack"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (e) { return result += e.attack; });
            console.log("hero+:" + result);
            return result + this.level * (10 + this.quality);
        }
    );
    d(p, "attackSpeed"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (e) { return result += e.attackSpeed; });
            return result + this.level * (1.1 + this.quality * 0.1);
        }
    );
    d(p, "dodge"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (e) { return result += e.dodge; });
            return result + 0.01 + this.level * 0.02 + this.quality * 0.002;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.getFightPower();
        }
    );
    p.getFightPower = function () {
        var result = 0;
        this.equipments.forEach(function (e) { return result += e.fightPower; });
        return result + this.maxHp * 1.5 + this.attack * 1.8 * this.attackSpeed + this.dodge * 20;
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map
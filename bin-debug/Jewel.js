var Jewel = (function () {
    function Jewel(level, quality) {
        this.isInteam = false;
        this.level = 1;
        this.quality = 2.8;
        level = this.level;
        quality = this.quality;
    }
    var d = __define,c=Jewel,p=c.prototype;
    d(p, "attack"
        ,function () {
            var result = this.level * (10 + this.quality);
            console.log("jewel+:" + result);
            return result;
        }
    );
    d(p, "attackSpeed"
        ,function () {
            var result = this.level * (1.1 + this.quality * 0.1);
            return result;
        }
    );
    d(p, "dodge"
        ,function () {
            var result = 0.01 + this.level * 0.02 + this.quality * 0.002;
            return result;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.getFightPower();
        }
    );
    p.getFightPower = function () {
        return this.attack * 1.8 * this.attackSpeed + this.dodge * 20;
    };
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
//# sourceMappingURL=Jewel.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Cache = function (target, propertyName, desc) {
    var getter = desc.get;
    var cacheKey = "__cache" + propertyName;
    desc.get = function () {
        if (!this[cacheKey]) {
            return getter.apply(this);
        }
        console.log(this[cacheKey]);
    };
    return desc;
};
var User = (function () {
    function User(health, mana, gold, exp, level, heros) {
        this.health = 100;
        this.mana = 50;
        this.gold = 0;
        this.exp = 0;
        this.level = 0;
        this.heros = [];
        this.__heroesInTeam = [];
        health = this.health;
        mana = this.mana;
        gold = this.gold;
        exp = this.exp;
        level = this.level;
        heros = this.heros;
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "herosInTeam"
        ,function () {
            return this.heros.filter(function (hero) { return hero.isInteam; });
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.getFightPower();
        }
    );
    d(p, "totalExp"
        ,function () {
            var result = this.level * 1000;
            return result;
        }
    );
    d(p, "maxHp"
        ,function () {
            return this.level * 100;
        }
    );
    d(p, "maxMana"
        ,function () {
            return this.level * 300;
        }
    );
    d(p, "attack"
        ,function () {
            var result = 0;
            this.heros.forEach(function (e) { return result += e.attack; });
            return result + this.level * 10;
        }
    );
    d(p, "attackSpeed"
        ,function () {
            var result = 1.1;
            this.heros.forEach(function (e) { return result += e.attackSpeed; });
            return result + this.level * 1.1;
        }
    );
    d(p, "dodge"
        ,function () {
            var result = 1.1;
            this.heros.forEach(function (e) { return result += e.dodge; });
            return result + this.level * 0.001;
        }
    );
    p.getFightPower = function () {
        var result = 0;
        this.heros.forEach(function (e) { return result += e.fightPower; });
        return result + this.health * 1.5 + this.mana + this.attack * 1.8 * this.attackSpeed + this.dodge * 20;
    };
    __decorate([
        Cache
    ], p, "herosInTeam", null);
    __decorate([
        Cache
    ], p, "fightPower", null);
    __decorate([
        Cache
    ], p, "totalExp", null);
    __decorate([
        Cache
    ], p, "maxHp", null);
    __decorate([
        Cache
    ], p, "maxMana", null);
    __decorate([
        Cache
    ], p, "attack", null);
    __decorate([
        Cache
    ], p, "attackSpeed", null);
    __decorate([
        Cache
    ], p, "dodge", null);
    return User;
}());
egret.registerClass(User,'User');
//# sourceMappingURL=User.js.map
var Property = (function () {
    function Property(name, value) {
        this.name = name;
        this.value = value;
    }
    var d = __define,c=Property,p=c.prototype;
    p.getDescription = function () {
        return this.name + ":+" + this.value + "\n";
    };
    return Property;
}());
egret.registerClass(Property,'Property');
//# sourceMappingURL=Property.js.map
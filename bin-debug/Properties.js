var Properties = (function () {
    function Properties() {
        this.all = [];
        this.all = [];
    }
    var d = __define,c=Properties,p=c.prototype;
    return Properties;
}());
egret.registerClass(Properties,'Properties');
function create(hero) {
    var container = new egret.DisplayObjectContainer();
    var tf = new egret.TextField();
    for (var _i = 0, _a = hero.properties.all; _i < _a.length; _i++) {
        var p = _a[_i];
        tf.text += p.getDescription();
        container.addChild(tf);
    }
    return container;
}
function create2(equipment) {
    var container = new egret.DisplayObjectContainer();
    var tf = new egret.TextField();
    for (var _i = 0, _a = equipment.properties.all; _i < _a.length; _i++) {
        var p = _a[_i];
        tf.text += p.getDescription();
        container.addChild(tf);
    }
    return container;
}
//# sourceMappingURL=Properties.js.map
var Panel = (function (_super) {
    __extends(Panel, _super);
    function Panel(heroes) {
        _super.call(this);
        for (var i = 0; i < heroes.length; i++) {
            this.addChild(create(heroes[i]));
        }
    }
    var d = __define,c=Panel,p=c.prototype;
    return Panel;
}(egret.DisplayObjectContainer));
egret.registerClass(Panel,'Panel');
//# sourceMappingURL=Panel.js.map
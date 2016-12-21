var Panel2 = (function (_super) {
    __extends(Panel2, _super);
    function Panel2(equipments) {
        _super.call(this);
        for (var i = 0; i < equipments.length; i++) {
            this.addChild(create2(equipments[i]));
        }
    }
    var d = __define,c=Panel2,p=c.prototype;
    return Panel2;
}(egret.DisplayObjectContainer));
egret.registerClass(Panel2,'Panel2');
//# sourceMappingURL=Panel2.js.map
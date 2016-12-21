class Panel2 extends egret.DisplayObjectContainer {
	constructor(equipments:Equipment[]) {
		super();
		for(var i=0;i<equipments.length;i++){
			this.addChild(create2(equipments[i]));
		}
	}
}
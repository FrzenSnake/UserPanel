class Panel extends egret.DisplayObjectContainer {
	constructor(heroes:Hero[]) {
		super();
		for(var i=0;i<heroes.length;i++){
			this.addChild(create(heroes[i]));
		}
	}
}
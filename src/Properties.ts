class Properties {
	all:Property[] = [];
constructor(){
	this.all=[]
}

}
function create(hero:Hero){
	var container = new egret.DisplayObjectContainer();
	var tf = new egret.TextField();
	for(var p of hero.properties.all){
	
		tf.text += p.getDescription();
		container.addChild(tf)
	}
	return container;
}
function create2(equipment:Equipment){
	var container = new egret.DisplayObjectContainer();
	var tf = new egret.TextField();
	for(var p of equipment.properties.all){

		tf.text += p.getDescription();
		container.addChild(tf)
	}
	return container;
}
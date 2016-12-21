class Property {
	name:string;
    value:number;
	public constructor(name:string,value:number) {
		this.name=name;
		this.value = value;
	}
	getDescription(){
		return this.name+":+"+this.value+"\n"
	}
}
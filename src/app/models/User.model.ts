export class User { 
	name : String;
	owes : Number;

	constructor( name : String , owes?:Number  ){
		this.name = name;
		this.owes = owes || 0 ;
	}
	
}
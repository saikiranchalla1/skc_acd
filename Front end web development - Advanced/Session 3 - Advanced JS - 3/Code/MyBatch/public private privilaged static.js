//Constructor
function Kid(name){
	//Private
	var idol = 'Paris Hilton';

	//Privilaged
	this.getIdol = function(){
		return idol;
	}

	//Not the best way
	// this.getName = function(){
	// 	return this.name;
	// }
	//Public
	this.name = name;
}
var kid1 = new Kid('name1');
var kid2 = new Kid('name2');

//Public
Kid.prototype.getName = function(){
	return this.name;
}

Kid.town = "Salt Lake City";

kid1.town;


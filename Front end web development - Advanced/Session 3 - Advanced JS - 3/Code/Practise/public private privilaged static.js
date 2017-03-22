// Constructor
function Kid (name) {
	// Private
	var idol = "Paris Hilton";
	
	// Privileged
	this.getIdol = function () {
		return idol;
	};
	//Not the best way
	/*this.getName = function () {
		return this.name;
	};*/
	// Public
	this.name = name;
}

var kid1 = new Kid("name1");
var kid2 = new Kid("name2");

// Public
Kid.prototype.getName = function () {
	return this.name;
};

kid1.getName();//kid1.name;
// Static property
Kid.town = "South Park";

kid1.idol;//undefined
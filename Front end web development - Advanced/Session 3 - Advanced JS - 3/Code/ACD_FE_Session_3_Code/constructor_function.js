function Hero(name,planet){
	this.name = name;
	this.planet = planet;
	this.sayName = function(){
		alert(this.name);
	}
}

//creating object of type Hero
var obOne = new Hero("SpiderMan","Earth");
var obTwo = new Hero("IronMan","Earth");
//calling the sayName function for obOne object
obOne.sayName();
//calling the sayName function for obTwo object
obTwo.sayName();
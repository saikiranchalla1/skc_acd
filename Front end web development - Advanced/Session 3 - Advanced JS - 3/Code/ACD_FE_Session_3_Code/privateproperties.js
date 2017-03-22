function Hero(name,planet){
	this.name = name;
	this.planet = planet;
	var password = "asdf";
	this.sayName = function(){
		alert(this.name);
	}
	this.displayPassword = function(){
		//this instance function can have access to the private property.
		alert(password);
	}
}

//creating object of type Hero
var obOne = new Hero("SpiderMan","Earth");
//calling the sayName function for obOne object
obOne.sayName();
//this will display undefined.
alert(obOne.password);
//displaying password property using the public function
obOne.displayPassword();

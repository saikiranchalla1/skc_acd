function Organism(planet){
	this.planet = planet;
}
Organism.prototype.sayPlanet = function(){
	alert("the planet is"+this.planet);
}
var organismOb = new Organism("Earth");

function Human(){
	
}
Human.prototype = organismOb;
Human.prototype.breathes = "air";
Human.prototype.constructor = Human;


Human.prototype.breathesWhat = function(){
	alert("Humans breathe "+this.breathes);
}
var humanOb = new Human();


function Programmer(name,sleepHours){
	this.name = name;
	this.sleepHours = sleepHours;
}
Programmer.prototype =  humanOb;
Programmer.prototype.sayName = function(){
	alert(this.name);
}
Programmer.prototype.constructor = Programmer;
var programmerOb = new Programmer("smith",10);
console.log(programmerOb);
programmerOb.sayPlanet();
programmerOb.breathesWhat();


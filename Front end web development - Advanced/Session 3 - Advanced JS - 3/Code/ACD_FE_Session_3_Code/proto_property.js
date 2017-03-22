var Bike = {
	TyresNo:2,
}
function Motorbike() {

}
Motorbike.prototype = Bike;
//Now, let's create a hondabike object and give it some properties.
var hondabike = new Motorbike();
hondabike.fuel = 'petrol';
hondabike.topspeed = 250;

console.log("no of tyres, ", hondabike.TyresNo);

hondabike.__proto__  //gives  Bike
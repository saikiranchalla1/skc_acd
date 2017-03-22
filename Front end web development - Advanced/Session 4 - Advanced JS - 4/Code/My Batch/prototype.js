function Gadget(name, color){
	this.name = name;
	this.color = color;
	this.whoAmI = function(){
		return 'I am a ' + this.color + ' ' + this.name;
	}
}

Gadget.prototype.price = 100;
Gadget.prototype.rating = 4;
Gadget.prototype.getInfo = function(){
	return 'Rating: ' + this.rating + ',price: ' + this.price;
}

// Gadget.prototype = {
// 	price : 100,
// 	rating: 3,
// 	getInfo : function(){
// 		return 'Rating: ' + this.rating + ',price: ' + this.price;
// 	}
// }

var newGadget = new Gadget('iPad', 'Grey');

Gadget.prototype.get = function(what){
	return this[what];
}
/*******************************************/
function Gadget(name){
	this.name = name;
}

Gadget.prototype.name = 'foo';
/*******************************************/
var a = [1,2,3];
// for (var i = a.length - 1; i >= 0; i--) {
// 	console.log(a[i]);
// };

for(var i in a){
	console.log(a[i]);
}

var o = {
	p1 : 1,
	p2 : 2
};

for(var iCtr in o){
	console.log(iCtr + ' = ' + o[iCtr]);
}
/*******************************************/


var monkey = {
	hair : true,
	feeds : 'bananas',
	breathes: 'air'
}

function Human(name){
	this.name = name;
}

Human.prototype = monkey;

var myself = new Human('Some Name');

function Human(){

}
Human.prototype = monkey;
var developer = new Human();
developer.feeds = 'pizzas';
developer.hackas = 'javascript';
/******************************/
function Shape(){
	this.name = 'shape';
	this.toString = function(){
		return this.name;
	}
}

function TwoDShape(){
	this.name = '2D Shape';
}

function Triangle(side, height){
	this.name = 'Triangle';
	this.side = side;
	this.height = height;
	this.getArea = function(){
		return this.side * this.height / 2;
	}
}

TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();

TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype.constructor = Triangle;

var myVar = new Triangle(5,10);
/*********************************************/
function multi(){
	var n = {}, stuff, j=0, len=arguments.length ;
	for(j = 0; j < len; j++) {
		stuff = arguments[j];
		for(var i in stuff){
			if(stuff.hasOwnProperty(i)){
				n[i] = stuff[i];
			}
			
		}
	}
	return n;
}

var shape = {
	name : 'shape',
	toString : function(){
		return this.name;
	}
}

var twoDee = {
	name :'2D shape',
	dimensions : 2
}

var triangle = multi(shape, twoDee, {
	name : 'Triangle',
	getArea : function(){
		return this.side * this.height /2;
	},
	side : 5,
	height : 10
});
/**********************************************/
function ParentConstructor(){
	var privateVar = false;
	this.flipPrivateVar = function(){
		privateVar = !privateVar;
	}

	this.showPrivateVariable = function(){
		alert(privateVar);
	}
}


ParentConstructor.prototype.myObject = {count : 1};

function ChildConstructor(){

}

ChildConstructor.prototype = new ParentConstructor();

var ob1 = new ChildConstructor();
var ob2 = new ChildConstructor();
/**********************Parasitic Inheritance**************************/


function ParentConstructor(){
	var parent = new Object();
	var privateVar = false;

	parent.flipPrivateVar = function(){
		privateVar = !privateVar;
	}

	parent.showPrivateVariable = function(){
		alert(privateVar);
	}

	parent.myObject = {
		count : 1
	}

	parent.name = 'Parent constructor';

	return parent;
}

function ChildConstructor(){
	var child = new ParentConstructor();

	child.name = 'ChildConstructor';

	return child;
}

var ob1 = new ChildConstructor();
var ob2 = new ChildConstructor();






























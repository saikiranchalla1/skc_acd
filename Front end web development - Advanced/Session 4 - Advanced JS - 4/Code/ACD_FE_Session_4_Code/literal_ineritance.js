var parentOb = {
	parentProperty:"Parent Object Literal",
	sayHi: function(){
		console.log("hi");
	}
}
//we create objecct using Object.create(). The childOb now has all properties of parentOb.
var childOb = Object.create(parentOb);

//we are adding new property for the child object.
childOb.name = "child object";
childOb.sayHello = function(){
	console.log("Hello");
}

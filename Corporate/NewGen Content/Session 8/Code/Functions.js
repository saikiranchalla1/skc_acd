function callMe(a,b){
	return a * b;
}

callMe(2,3);

//IIFE (IIFY)

(function (name, location){
	console.log('Hello, ' + name + '  from ' + location );
}) ('Divjot', 'Delhi');

function invokeSum(a, b){
	return a() + b();
}

invokeSum(
	function() {return 5+4;},
	function() {return 6+10;}
	)

function test(){
	console.log('Inside test function');
	return function() {
		console.log('Inside the return function');
	}
}

var newFunction = test();
newFunction();

//Variable hoisting
if(i == 10){
	console.log('The value of i is 10');
}

var i = 10;

//Inner functions

function outerFunc(param){
	console.log('From Outer Func' + param);
	function innerFunc(inputParam){
		return inputParam * 10;
	}
	return innerFunc(param);
}
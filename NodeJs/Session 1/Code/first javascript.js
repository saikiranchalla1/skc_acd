function add(a,b){
	return a + b;
}

function myFunc(){
	for (var i = 0; i < arguments.length; i++) {
		alert(i + " " + arguments[i]);
	}
}

function funcRetFunc(){

	alert('inside of main function');

	return function() {
		alert('inside the returned function');
	};
}

var myVar = funcRetFunc();

function invokeSum(a, b){
	return a() + b();
}

function returnOne(){
	return 1;
}

function returnTwo(){
	return 2;
}
alert(invokeSum(returnOne, returnTwo));

alert(invokeSum(function() {return 10;},function() {return 20;}));

alert(add(1,2));

myFunc(1,2,3,4,5);

var response = prompt("Enter the javascript you want to execute");
eval(response);

//IIFE - immediately invokble function expression
(function (name, location) {
	alert("Hello Mr. " + name +", from " + location);
})('balu', 'hyderabad');

/*------------------------------------------------------------*/

if(iCtr == 10){
	alert("The value of i is 10");
}
var iCtr = 10;
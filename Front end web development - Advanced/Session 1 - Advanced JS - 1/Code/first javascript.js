var funcName = function (a, b){
	return a + b;
	//business logic
}

/*var funcNameChanged = function funcName(){

}*/
console.log(funcName(1,2));

function funcName(a, b){
	return a + b;
	//business logic
}


(function(myname){
	console.log(myname);
})("AcadGild"))

(function(thisName){
console.log( 'hello, my name is: ' + thisName );
}("AcadGild"))
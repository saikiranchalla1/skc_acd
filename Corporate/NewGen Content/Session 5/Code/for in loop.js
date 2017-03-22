var person = {fname:'John', lname:'Cena', age:40};
var x;
for(x in person){
	console.log(x + "------->" + person[x]);
}

/*while(condition){
	//block of code
}*/

var i = 0;
while(true){
	if(i%2 == 0){
		i++;
		continue;
	}
	if(i == 11){
		break;
	}
	console.log(i);
	i++;
}

/*do {
	//block of code
}while(condition);*/
do {
	console.log("Do while Loop");
}while(false);

/*function funcName(param1, param2){
	//lines of code
}*/

function callMe(){
	for (var i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}
callMe(1,2,3,4,5);


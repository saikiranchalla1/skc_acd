var person =  {
	name : 'Person 1',
	age : 50,
	married : true
}

console.log(person.name);
console.log(person["age"]);

for(var iCtr in person){
	console.log(iCtr + "---->" + person[iCtr]);
}


var array = [1,2,3,4,5,6];
for(var iCtr in array){
	console.log(iCtr + "----->>>" + array[iCtr]);
}
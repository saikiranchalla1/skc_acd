var ob = {
	name: "Smith",
	age: 29,
	sayName:function(){
		alert("The name is "+this.name);
	}
}
ob.sayName();
ob.age = 32;
ob.location = "Bangalore";
alert("Age and locations added on the fly and the values are "+ob.age+ "and"+ob.location )
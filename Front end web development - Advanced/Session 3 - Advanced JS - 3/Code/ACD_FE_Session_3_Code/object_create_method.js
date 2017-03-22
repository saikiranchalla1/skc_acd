function person(first, last, age, eyecolor){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
var myFather = new person("John", "Doe", 50, "blue");
var myMother = new person("Sally", "Rally", 48, "green");

var newObject = Object.create(myFather); // creating an object using existing Object

console.log(newObject.firstName); //log the properties of newly create Object

console.log(newObject.lastName); //log the properties of newly create Object

console.log(newObject.age); //log the properties of newly create Object

console.log(newObject.eyeColor); //log the properties of newly create Object
function ParentConstructor() {
    var privateVariable = false;

    this.flipPrivateVariable = function() {
        privateVariable = !privateVariable;
    };

    this.showPrivateVariable = function() {
        console.log( privateVariable);
    };
}

ParentConstructor.prototype.myObject = {count:1};

function ChildConstructor(){
}
ChildConstructor.prototype = new ParentConstructor();
var ob1 = new ChildConstructor();
var ob2 = new ChildConstructor();


ob1.flipPrivateVariable();
ob1.myObject.count++; //increase count of count property

console.log(ob2.myObject.count);
ob2.showPrivateVariable();



ob1.flipPrivateVariable();
ob2.showPrivateVariable(); //shows false!


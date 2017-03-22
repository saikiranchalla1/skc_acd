function ParentConstructor() {
    var parent = new Object();

    var privateVariable = false;

    parent.flipPrivateVariable = function() {
        privateVariable = !privateVariable;
    };

    parent.showPrivateVariable = function() {
        alert( privateVariable);
    };

    parent.myObject = {count:1}; 

    parent.name = 'ParentConstructor';

    return parent;
}

function ChildConstructor() {
    var child = new ParentConstructor(); 

    child.name = 'ChildConstructor';

    return child;
}

var ob1 = new ChildConstructor();
var ob2 = new ChildConstructor();

ob1.flipPrivateVariable();
ob2.showPrivateVariable(); //The private variable is not changed for object 2
ob1.myObject.count++;
console.log(ob2.myObject.count);//the count still remains 1 for object 2.

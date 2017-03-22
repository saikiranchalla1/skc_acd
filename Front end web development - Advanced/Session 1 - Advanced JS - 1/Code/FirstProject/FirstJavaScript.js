/**
 * Created by SaiKiran on 21/08/16.
 */
/*
function myFunc(inp1, inp2){
    return inp1 * inp2;
}

console.log(myFunc(1,2));*/


/*
var anonmyFunc = function (inp1, inp2) {
    console.log(inp1 * inp2);
}

anonmyFunc(10,20);*/

(
function (){
    console.log("Hello World!!!");
}
)();


(
    function (name, location){
        console.log("Welcome!!! " + name + ", from " + location);
    }
)('Sharmila', 'Blore');

/*var input = prompt("Enter your JS: ");
eval(input);*/


if(i === 10){
    console.log("I is 10");
}else{
    console.log("I is NOT 10");
}

var i = 10;
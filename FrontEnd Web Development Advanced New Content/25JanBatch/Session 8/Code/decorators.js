/*
    command line: tsc --target ES5 --experimentalDecorators
    tsconfig.json: "experimentalDecorators" : true
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function color(value) {
    return function (target) {
        //do something with value and target
    };
}
/* Decorator composition */
// Single line : @a @b x
//Multiple lines:
/*
    @f
    @g
    x
*/
// (f O g)(x) ====> f(g(x))
// function f(){
//     console.log("f(): evaluated");
//     return function(target, propertyKey: string, descriptor: PropertyDescriptor){
//         console.log("f() : called");
//     }
// }
// function g(){
//     console.log("g(): evaluated");
//     return function(target, propertyKey: string, descriptor: PropertyDescriptor){
//         console.log("g() : called");
//     }
// }
// class MyClass{
//     @f()
//     @g()
//     method(){
//     }
// }
/* Decorator Evaluation :
    1. Parameter Decorators, method, accessor, property ---> Instance members.
    2. Parameter Decorators, method, accessor, property ---> static members.
    3. Parameter decorators are applied for COnstructors
    4. Class Decorators --> class


*/
/*
 Class Decorator

*/
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        console.log("--->" + target);
        console.log("--->" + propertyKey);
        console.log("--->" + descriptor);
    };
}
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
Greeter = __decorate([
    sealed
], Greeter);
/*
    Method decorator:

*/

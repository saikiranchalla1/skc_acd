/*
@expression
e.g. @sealed

function sealed(target){

}
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//decorator factories
// function color(value:string){ //this is decorator factory
//     return function(target){ //this is decorator
//         //some operation
//     }
// }
//@f @g x  --->> f(g(x))= g is evaluated and then f is evaluated
// @f
// @g
// x
// function f(){
//     console.log('f() :  evaluated');
//     return function(target, propertyKey : string, descriptor:PropertyDescriptor){
//         console.log('f(): called');
//     }
// }
// function g(){
//     console.log('g() :  evaluated');
//     return function(target, propertyKey : string, descriptor:PropertyDescriptor){
//         console.log('g(): called');
//     }
// }
// class C {
//     @f()
//     @g()
//     method(){
//     }
// }
// parameter, method, accessor, property
//class decorators
//e.g. @component
var GreeterClass = (function () {
    function GreeterClass(message) {
        this.greeting = message;
    }
    GreeterClass.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return GreeterClass;
}());
__decorate([
    enumerable(false)
], GreeterClass.prototype, "greet", null);
GreeterClass = __decorate([
    sealed
], GreeterClass);
//Object.seal();
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        descriptor.enumerable = value;
    };
}

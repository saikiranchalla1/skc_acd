import "reflect-metadata";

/*
@expression
e.g. @sealed

function sealed(target){

}
*/

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

@sealed
class GreeterClass {
    @format("Hello, " %s)
    greeting : string;
    private _x : number;
    constructor(message : string){
        this.greeting = message;
    }

    @enumerable(false)
    greet(){
        return "Hello, " + this.greeting;
    }

    @configurable(false)
    get x(){
        return this._x;
    }
}

//Object.seal();

function sealed(constructor : Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function enumerable(value : boolean){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        descriptor.enumerable = value;
    }
}

function configurable(value : boolean){
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        descriptor.configurable = value;
    }
}

const formatMetadataKey = Symbol("format");

function format(formatString: string){
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string){
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
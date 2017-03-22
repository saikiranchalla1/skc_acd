import "reflect-metadata";

/*
    command line: tsc --target ES5 --experimentalDecorators
    tsconfig.json: "experimentalDecorators" : true
*/

function color(value : string){ //this is the decorator factory
    return function(target){ // this is the decorator
        //do something with value and target
    }
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
function sealed(constructor : Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function enumerable(value : boolean){

    return function(target: any, propertyKey:string, descriptor: PropertyDescriptor){
        console.log("--->" + target);
        console.log("--->" + propertyKey);
        console.log("--->" + descriptor);
        descriptor.enumerable = value;
    };
}

function configurable(value : boolean){

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        descriptor.configurable = value;
    }
}


const formatMetadataKey = Symbol("format");

const requiredMetadatakey = Symbol("required");

function format(formatString : string){
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target : any, propertyKey : string){
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

function required(target : Object, propertyKey: string, parameterIndex : number){
    //some code
}

function validate(target: any, propertyName : string, descriptor : TypedPropertyDescriptor){
    
}
@sealed
class Greeter {
    @format("Hello, %s")
    greeting: string;
    constructor(message : string){
        this.greeting = message;
    }
    
    // @enumerable(false)
    // greet(){
    //     let formatString = getFormat(this, "greeting");
    //    //return "Hello, " + this.greeting;
    //    return formatString.replace("%s", this.greeting);
    // }

    @validate
    greet(@required name : string){
        return "Hello " + name + ", " + this.greeting;
    }
    @configurable(false)
    get greetingGet(){
        return this.greeting;
    }

    //parameter decorator
    
}





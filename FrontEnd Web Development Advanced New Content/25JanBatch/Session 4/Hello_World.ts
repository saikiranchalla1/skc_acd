/**
 * Created by SaiKiran on 03/02/17.
 */
class HelloWorld {
    constructor(public message : string){
        console.log("Hello, " + message);
    }

}

var hello = new HelloWorld('World');
console.log(hello.message);
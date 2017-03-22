/**
 * Created by SaiKiran on 03/02/17.
 */
var HelloWorld = (function () {
    function HelloWorld(message) {
        this.message = message;
        console.log("Hello, " + message);
    }
    return HelloWorld;
}());
var hello = new HelloWorld('World');
console.log(hello.message);
//# sourceMappingURL=Hello_World.js.map
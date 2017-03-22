/**
 * Created by SaiKiran on 24/12/16.
 */
var HelloWorld = (function () {
    function HelloWorld(message) {
        this.message = message;
    }
    return HelloWorld;
}());
var hello = new HelloWorld('Hello, World!!!');
console.log(hello.message);
//# sourceMappingURL=hello_world.js.map
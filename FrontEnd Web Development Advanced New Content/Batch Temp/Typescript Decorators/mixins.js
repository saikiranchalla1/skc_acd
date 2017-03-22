var Disposable = (function () {
    function Disposable() {
    }
    Disposable.prototype.dispose = function () {
        this.isDisposed = true;
    };
    return Disposable;
}());
var Activatable = (function () {
    function Activatable() {
    }
    Activatable.prototype.activate = function () {
        this.isActive = true;
    };
    Activatable.prototype.deactivate = function () {
        this.isActive = false;
    };
    return Activatable;
}());
var MyClass = (function () {
    function MyClass() {
        var _this = this;
        //Disposable
        this.isDisposed = false;
        //Activatable
        this.isActive = false;
        setInterval(function () { return console.log(_this.isActive + ": " + _this.isDisposed); });
    }
    MyClass.prototype.interact = function () {
        this.activate();
    };
    return MyClass;
}());
applyMixins(MyClass, [Disposable, Activatable]);
function applyMixins(derivedCtor, baseCtos) {
    baseCtos.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
var myClass = new MyClass();
setTimeout(function () { return myClass.interact(); }, 1000);

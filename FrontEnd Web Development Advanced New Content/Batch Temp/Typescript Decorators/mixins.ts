class Disposable {
    isDisposed : boolean;

    dispose(){
        this.isDisposed = true;
    }
}

class Activatable {
    isActive : boolean;
    activate(){
        this.isActive = true;
    }

    deactivate(){
        this.isActive = false;
    }
}

class MyClass implements Disposable, Activatable{
    constructor(){
        setInterval( () => console.log(this.isActive + ": " + this.isDisposed));
    }

    interact(){
        this.activate();
    }

    //Disposable
    isDisposed : boolean = false;
    dispose: () => void;

    //Activatable
    isActive : boolean = false;
    activate: () => void;
    deactivate: () => void;

}


applyMixins(MyClass, [Disposable, Activatable]);

function applyMixins(derivedCtor : any, baseCtos : any[]){
    baseCtos.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    });
}

let myClass = new MyClass();
setTimeout( () => myClass.interact(), 1000);
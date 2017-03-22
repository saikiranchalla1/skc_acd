class Disposable {
    isDisposable : boolean;
    dispose(){
        this.isDisposable = true;
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

class MyObject implements Disposable, Activatable{
    constructor(){
        setInterval( () => console.log(this.isActive + ": " + this.isDisposed), 500);
    }

    interact(){
        this.activate();
    }

    isDisposed: boolean = false;
    dispose: () => void;

    isActive : boolean = false;

    activate : () => void;
    deactivate : () => void;

    applyMixins(MyObject, [Disposable, Activatable]);

    let myObj = new MyObject();
    setTimeout( () => myObj.interact(), 1000);

    function applyMixins(derivedCtor: any, baseCtors: any[]){
        baseCtors.forEach( baseCtor => {

            Object.getOwnPropertyNames(baseCtor.prototype).forEach( name => {
                derivedCtor.prototype[name] = baseCtor.prototyp[name];
            })
        })
    }
}
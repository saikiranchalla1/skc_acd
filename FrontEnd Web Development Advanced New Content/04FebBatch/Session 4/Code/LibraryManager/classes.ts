import { Book, DamageLogger, Author, Librarian} from './interfaces';

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName : string){
        console.log(this.name + ' is assisting ' + custName);
    }
}


abstract class ReferenceItem {
    // title: string;
    // private year:number;
    private _publisher:string;
    static department : string = 'Research';

    constructor(public title:string, protected year:number){
        console.log('Creating a new ReferenceItem');
        // this.title=newTitle;
        // this.year = newYear;
    }

    printItem():void{
        console.log(`${this.title} was published in the year ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    get publisher():string{
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher : string){
        this._publisher = newPublisher;
    }

    abstract printCitation():void;
}

class Encyclopedia extends ReferenceItem{
    //edition:number;

    constructor(newTitle:string, newYear:number, public edition:number){
        super(newTitle, newYear);
    }

    printItem():void{
        //super.printItem();
        console.log(`Edition: ${this.edition} printed in ${this.year}`);
    }

    printCitation():void {
        console.log(`${this.title} - ${this.year}`);
    }
}
export {UniversityLibrarian, ReferenceItem, Encyclopedia};
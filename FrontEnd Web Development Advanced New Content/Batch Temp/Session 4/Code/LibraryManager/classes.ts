import {Book, DamageLogger, Author, Librarian} from './interface';

class UniversityLibrarian implements Librarian {
    name : string;
    email: string;
    department : string;

    assistCustomer(custname : string) {
        console.log(this.name + ' is assisting ' + custname);
    }
}
abstract class ReferenceItem {
    private _publisher : string;

    static department : string = 'Research';
    constructor(public title : string, protected year : number){
        console.log('Creating a new ReferenceItem');

    }

    printItem() :void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}` );
    }

    get publisher() : string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher : string) {
        this._publisher = newPublisher;
    }

    abstract printCitation() : void;
}


class Encyclopedia extends ReferenceItem {

    constructor(newTitle : string, newYear : number, public edition : number){
        super(newTitle, newYear);
        console.log("Constructing a new Encyclopedia");
    }

    printItem() : void {
        //super.printItem();
        console.log(`Edition : ${this.edition}`);
    }

    printCitation() : void {
        console.log(`${this.title} - ${this.year}`)
    }
}
export {UniversityLibrarian, ReferenceItem, Encyclopedia};
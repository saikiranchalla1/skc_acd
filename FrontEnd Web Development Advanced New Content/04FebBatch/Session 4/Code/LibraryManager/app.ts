import {Category} from './enums';
import {Book, DamageLogger, Author, Librarian} from './interfaces';
import { UniversityLibrarian, ReferenceItem, Encyclopedia } from './classes';
import {Purge} from './utilityFunctions';

function GetAllBooks() : Book[]{
    let books = [
        { id : 1 ,title: 'Ulysses', author:'James Joyce', available :true, category : Category.Fiction},
        { id : 2, title: 'A Farewellto Arms', author:'Ernest Hemingway', available :false, category: Category.Fiction},
        { id : 3, title: 'I know why the caged bird sings', author:'Maya Angelou', available :true, category: Category.Poetry},
        { id: 4, title :'Moby Dick', author: 'Herman Melville', available:true, category:Category.Children}
    ];

    return books;
}

function LogFirstAvailable(books = GetAllBooks()):void{
    let numberOfBooks:number = books.length;
    let firstAvailable:string = '';
    for(let currentBook of books){
 
        if(currentBook.available){
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}


function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string>{
    console.log('Getting books in category: ' + Category[categoryFilter]);

    const allBooks = GetAllBooks();
    const filteredTitles:string[] = [];

    for(let currentBook of allBooks){
        if(currentBook.category === categoryFilter){
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles : string[]): void{
    for(let title of titles){
        console.log(title);
    }
}

function GetBookByID(id : number) : Book{
    const allBooks = GetAllBooks();
    return allBooks.filter( book => book.id === id)[0];
}

function CreateCustomerID(name :string, id : number) : string{
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void{
    console.log('Creating customer: ' + name);

    if(age){
        console.log('Age: ' + age);
    }

    if(city){
        console.log('City: ' + city);
    }
}

function CheckoutBooks(customer : string, ...bookIDs:number[]): string[]{
    console.log('Checking out books for : '+ customer);

    let booksCheckedOut : string[] = [];

    for(let id of bookIDs){
        let book = GetBookByID(id);
        if(book.available){
            booksCheckedOut.push(book.title);
        }
    }

    return booksCheckedOut;
}

function GetTitles(author : string):string[];
function GetTitles(available : boolean): string[];
function GetTitles(bookProperty : any): string[]{
    const allBooks = GetAllBooks();
    const foundTitles : string[] = [];

    if(typeof bookProperty == 'string'){
        //get all books by a specific author
        for(let book of allBooks){
            if(book.author === bookProperty){
                foundTitles.push(book.title);
            }
        }
    }else if(typeof bookProperty == 'boolean'){
        //get all books based on specificed availability
        for(let book of allBooks){
            if(book.available === bookProperty){
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}


function PrintBook(book : Book) : void{
    console.log(book.title + ' by ' + book.author);
}


// const poetryBooks = GetBookTitlesByCategory(Category.Poetry);
// LogBookTitles(poetryBooks);

// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach( (val, idx, arr) => console.log(++idx + "-" + val));
// const idOne = GetBookByID(1);
// console.log(idOne[0].title);
//let idGenerator: (chars: string, nums: number) => string;
//idGenerator = CreateCustomerID;

//idGenerator = (name:string, id: number) => {return id + name;};

//let myId : string = idGenerator('henry', 10);
//console.log(myId);

//CreateCustomer('Srinivas', null, 'City')

// let poetryBooks = GetBookTitlesByCategory();
// poetryBooks.forEach( title => console.log(title));

//LogFirstAvailable();

// let myBooks : string[] = CheckoutBooks('Acadgild', 1, 2, 3);

// myBooks.forEach( title => console.log(title));

// let hermanBooks = GetTitles('Herman Melville');
// hermanBooks.forEach( title => console.log(title));

// let availableBooks = GetTitles(false);
// availableBooks.forEach( title => console.log(title));

// let myBook: Book = {
//     id: 5,
//     title : 'Pride and Prejudice',
//     author: 'Jane Austen',
//     available: true,
//     category : Category.Fiction,
//     markDamaged: (reason: string) => console.log('Damaged: ' + reason)
// }

// PrintBook(myBook);
// myBook.markDamaged('torn pages');

// let logDamage: DamageLogger;
// logDamage = (damage: string) => console.log('Damage Reported: ' + damage);
// logDamage('coffee stains');


// let favoriteLibrarian : Librarian = new UniversityLibrarian();

// favoriteLibrarian.name = 'Sharon';
// favoriteLibrarian.assistCustomer('Lynda');

//let ref = new ReferenceItem('Facts and Figures', 2016);
// ref.title = 'Facts and Figures';
// ref.year = 2016;
// ref.printItem();
// ref.publisher = 'Random Data Publishing';
// console.log(ref.publisher);

// let refBook:ReferenceItem = new Encyclopedia('WorldPedia', 2011, 10);
// refBook.printItem();
// console.log(refBook.edition);
// refBook.printCitation();

let Newspaper = class extends ReferenceItem {
    printCitation():void{
        console.log(`Newpaper : ${this.title}`);
    }

}

let myPaper = new Newspaper('The Gazette', 2016);
myPaper.printCitation();

// class Novel extends class {title:string}{
//     mainCharacter:string;
// }

// let favoriteNovel = new Novel();
// favoriteNovel.mainCharacter;

let inventory:Array<Book> = [
    {id: 10, title:'The C Programming Language', author:'K & R', available:true, category:Category.Fiction},
    {id: 11, title:'The C Programming Language', author:'K & R', available:true, category:Category.Fiction},
    {id: 12, title:'The C Programming Language', author:'K & R', available:true, category:Category.Fiction},
    {id: 13, title:'The C Programming Language', author:'K & R', available:true, category:Category.Fiction}
];

let purgedBoks: Array<Book> = Purge(inventory);
purgedBoks.forEach(book => console.log(book.id));

let purgedNum : Array<number> = Purge<number>([1,2,3,4,5,6,]);

console.log(purgedNum);
import {Category} from './enums';
import {Book, DamageLogger, Author, Librarian, Magazine} from './interfaces';
import {UniversityLibrarian, ReferenceItem, Encyclopedia} from './classes';
import {Purge} from './lib/utilityFunctios';
import Shelf from './shelf';
// class HelloWorld {
//     constructor(public message : string){
//         console.log("Hello, " + message);
//     }
// }

// var hello = new HelloWorld('World');
// console.log("Testing");


// let myString: string = "acadgild";

// let strArray1:string[] = ['here', 'are', 'the', 'strings'];

// let strArray2:Array<string> = ['here', 'are', 'the', 'strings'];

// let strArray3:any[]  = ['here', 'are', 'the', 'strings', true, 42];

// let myTuple : [number, string, boolean] = [25, 'truck'];

// console.log(myTuple[0]);

// myTuple[0] = 45;

// myTuple[2] = true;

// myTuple[3] = "acadgild";

// myTuple[4] = false;

// myTuple[5] = 65; 


// function PublicationMessage(year: number) : string {
//     return 'Date Published: ' + year;
// }

// let publishFunc : (someYear : number) => string;

// publishFunc=PublicationMessage;

// let message: string = publishFunc(2016);

// function CreateCustomer(name: string, age? : number) {
    
// }

// function GetBookByTitle(title: string = 'The C Programming Language') {
    
// }

// function GetBooksReadForCust(name: string, ...bookIds : number[]){

// }

// let books = GetBooksReadForCust('John', 2, 5, 6);

// let books_1 = GetBooksReadForCust('John', 2, 5, 6, 7, 8);


// function GetTitles(author: string): string[]{
//     return [];

// }

// function GetTitles(available: boolean): string[]{
//     return [];
// }

// function GetTitles(author: string): string[];
// function GetTitles(available: boolean): string[];
// function GetTitles(bookProperty : any): string[] {

//     if(typeof bookProperty == 'string'){
//         //get books by author add that to a array
//     }else if(typeof bookProperty == 'boolean'){
//         //get books by availability add that to a array
//     }

//     return [];
// }

// interface Duck {
//     walk: () => void;
//     swim: () => void;
//     quack: () => void;

// }

// let probablyADuck = {
//     walk : () => console.log('Walking like a duck');
//     swim: () => console.log('Swimming like a duck');
//     quack: () => console.log('Quacks like a duck');

    
// }

// function FlyOverWater(bird: Duck){

// }

// FlyOverWater(probablyADuck);// ?? Works

// interface Book {
//     id : number;
//     title : string;
//     author: string;
//     pages? : number;
//     markDamaged : (reason : string) => void;
// }

// class ReferenceItem {
//     //methods
//     //properties
//     numberOfPages : number;

//     get editor() : string{ 
//         //custom code
//         return '';
//     }

//     set editor(newEditor : string){

//     }

//     printChapterTitle(chapterNum : number): void{
//         //print logic goes here
//     }

//     constructor(title : string, publisher? : string){
//         //perform initializations here
//     }


// }

// let encyclopedia = new ReferenceItem('WorldPedia', 'Packtpub');

// class Author {
//     //name : string;
//     // constructor(authorName : string){
//     //     name = authorName;
//     // }

//     constructor(public name : string){

//     }
// }

// class Library {
//     constructor(public name : string){

//     }

//     static description : string = 'A source of knowledge';

// }

// let lib = new Library('Salt Lake City Public Library');

// let name = lib.name;

// let desc = Library.description;

/*
    Access modifiers:

        1) public
        2) private
        3) Protected

*/
/************************************************************************* */


function GetAllBooks() : Book[]{
    let books = [
        {id: 1,title : 'Ulysses', author: 'James Joyce', available : true, category : Category.Fiction},
        {id: 2,title : 'Lets C', author: 'Yashwanth Kanethkar', available : false, category: Category.Programming},
        {id: 3, title : 'Advanced Algorithms', author: 'Narsimha Karimunchi', available : true, category: Category.Poetry}
    ];

    return books;
}



function LogFirstAvailable(books = GetAllBooks()){
    let numberOfBooks = books.length;
    let firstAvailable = '';
    for(let currentBook of books){
        

        if(currentBook.available){
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log(`Total Books: ` + numberOfBooks);
    console.log(`First Available :` + firstAvailable);

}

function GetBookTitlesByCategory(categoryFilter : Category = Category.Programming){
    console.log("Getting books in Category: " + categoryFilter);

    const allBooks = GetAllBooks();

    const filteredTitles : string[] = [];

    for(let currentBook of allBooks){
        if(currentBook.category == categoryFilter){
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;

}


function CreateCustomerID(name: string, id: number) : string {
    return name + id;
}

function LogBookTitles(titles: string[]): void{
    for(let title of titles){
        console.log(title);
    }
}


function CreateCustomer(name: string, age?: number, city?: string): void{
    console.log('Creating customer ' + name);
    if(age){
        console.log('Age: ' + age);
    }

    if(city){
        console.log('City: ' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIds: number[]): string[]{
    console.log('Checking out books for  ' + customer);

    let booksCheckedOut: string[] = [];

    for(let id of bookIds){
        let book = GetBookById(id);
        if(book.available){
            booksCheckedOut.push(book.title);
        }
    }

    return booksCheckedOut;
}

function GetBookById(id: number){
    let books = GetAllBooks();
    for(let book of books){
        if(book.id == id){
            return book;
        }
    }
}


function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty : any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles:string[] = [];
    if(typeof bookProperty == 'string'){
        //get books by author add that to a array
        for(let book of allBooks){
            if(book.author == bookProperty){
                foundTitles.push(book.title);
            }
        }
    }else if(typeof bookProperty == 'boolean'){
        //get books by availability add that to a array

        for(let book of allBooks){
            if(book.available == bookProperty){
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}


function PrintBook(book : Book) : void{
    console.log(book.title + ' by ' + book.author)
}

// const allBooks = GetAllBooks();
// LogFirstAvailable(allBooks);

// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// LogBookTitles(fictionBooks);

let IdGenerator : (chars : string, nums: number) => string;

IdGenerator = (name: string, id:number) => {return id + name}
//IdGenerator = CreateCustomerID;



// let myID : string = IdGenerator('John', 15);
// console.log(myID);

//CreateCustomer('John Cena' ,45, 'SFO');

const fictionBooks = GetBookTitlesByCategory();

// fictionBooks.forEach(title => console.log(title));

//LogFirstAvailable();

// let myBooks = CheckoutBooks('Michelle', 1);
// myBooks.forEach(title => console.log(title));


// let yashwanthBooks = GetTitles(true);
// yashwanthBooks.forEach(title => console.log(title));


let myBook = {
    id : 10,
    title : 'Mining of Massive Datasets',
    author : 'Jure Leskovec',
    available : true,
    category : Category.Programming,
    markDamaged : (reason : string) => console.log(reason)
}

// PrintBook(myBook);
// myBook.markDamaged('missing back cover');


// let logDamage : DamageLogger;
// logDamage = (damage : string) => console.log("Damage reported: " + damage);

// logDamage("coffee spilled");


// let favoriteLibrarian : Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'James';
// favoriteLibrarian.assistCustomer('Jack');

// let ref = new ReferenceItem("Facts and Figures", 2017);
// // ref.title = "Facts and Figures";
// // ref.year = 2017;
// ref.printItem();
// ref.publisher = 'Random publisher';
// // ref._publisher = '';
// console.log(ref.publisher);

// let refBook = new Encyclopedia('WorldPedia', 2016, 10);
// refBook.printItem();

// let poetryBooks : Book[];

// let fictionBooksArr : Array<Book>;

// let historyBooks = new Array<Book>(5);


// function LogAndReturn<T>(thing : T, type : S) : T {
//     console.log('Here: ' + thing);
//     return thing;
// }

// let someString : string = LogAndReturn<string>('log this');

// let newMag : Magazine = { title : 'NatGeo Specials'};

// let someMag : Magazin = LogAndReturn<Magazine>(newMag);

let inventory : Array<Book> = [
        {id: 1,title : 'Ulysses', author: 'James Joyce', available : true, category : Category.Fiction},
        {id: 2,title : 'Lets C', author: 'Yashwanth Kanethkar', available : false, category: Category.Programming},
        {id: 3, title : 'Advanced Algorithms', author: 'Narsimha Karimunchi', available : true, category: Category.Poetry}
    ];

// //Purge<Book>(inventory);

// let purgedBooks : Array<Book> = Purge<Book>(inventory);
// purgedBooks.forEach(book => console.log(book.title));

// let purgedNumbers : Array<number> = Purge<number>([1 , 2, 3, 4, 5]);
// console.log(purgedNumbers);

// interface Inventory<T> {
//     getNewestItem : () => T;
//     addItem : (newItem : T) => void;
//     getAllItems : () => Array<T>;
// }

// let bookInventory : Inventory<Book>;

// class Catalog<T> implements Inventory<T> {
//     private catalogItems = new Array<T>();

//     addItem(newItem : T){
//         this.catalogItems.push(newItem);
//     }
//     //implement the other methods
// }

// let bookCatalog = new Catalog<Book>();

let bookShelf : Shelf<Book> = new Shelf<Book>();

inventory.forEach(book => bookShelf.add(book));

let firstBook : Book = bookShelf.getFirst();

let magazines : Array<Magazine> = [

    {title : 'MacWorld', publisher: 'Apple'},
    {title : 'Computer World', publisher: 'PTI'},
    {title : 'GQ', publisher: 'GQ'}
];

let magazineShelf :  Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));

let firstMagazine  : Magazine = magazineShelf.getFirst();

// let numberShelf : Shelf<number> = new Shelf<number>();
// [10, 20, 30].forEach(num => numberShelf.add(num));
// let firstNumber : number = numberShelf.getFirst();

class Testing {
    
    constructor(public title : string){

    }
}
let testShelf : Shelf<Testing> = new Shelf<Testing>();

let testingShelf : Testing = new Testing('abc');
testShelf.add(testingShelf);

console.log(firstBook);
console.log(firstMagazine);
//console.log(firstNumber);


// interface CatalogItem {
//     catalogNumber : number;
// }

// class Catalog<T extends CatalogItem> implements CatalogItem {
//     catalogNumber : number;
// }


magazineShelf.printTitles();

let softwareBook = bookShelf.find('Lets C');

console.log(`${softwareBook.title} and ${softwareBook.author}`);
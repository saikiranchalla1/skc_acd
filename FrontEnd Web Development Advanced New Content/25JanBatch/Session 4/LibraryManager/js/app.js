"use strict";
var enums_1 = require("./enums");
var shelf_1 = require("./shelf");
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
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'Lets C', author: 'Yashwanth Kanethkar', available: false, category: enums_1.Category.Programming },
        { id: 3, title: 'Advanced Algorithms', author: 'Narsimha Karimunchi', available: true, category: enums_1.Category.Poetry }
    ];
    return books;
}
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Total Books: " + numberOfBooks);
    console.log("First Available :" + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Programming; }
    console.log("Getting books in Category: " + categoryFilter);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category == categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function CreateCustomerID(name, id) {
    return name + id;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function CreateCustomer(name, age, city) {
    console.log('Creating customer ' + name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}
function CheckoutBooks(customer) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for  ' + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIds_1 = bookIds; _a < bookIds_1.length; _a++) {
        var id = bookIds_1[_a];
        var book = GetBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetBookById(id) {
    var books = GetAllBooks();
    for (var _i = 0, books_2 = books; _i < books_2.length; _i++) {
        var book = books_2[_i];
        if (book.id == id) {
            return book;
        }
    }
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        //get books by author add that to a array
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author == bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        //get books by availability add that to a array
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available == bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
// const allBooks = GetAllBooks();
// LogFirstAvailable(allBooks);
// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// LogBookTitles(fictionBooks);
var IdGenerator;
IdGenerator = function (name, id) { return id + name; };
//IdGenerator = CreateCustomerID;
// let myID : string = IdGenerator('John', 15);
// console.log(myID);
//CreateCustomer('John Cena' ,45, 'SFO');
var fictionBooks = GetBookTitlesByCategory();
// fictionBooks.forEach(title => console.log(title));
//LogFirstAvailable();
// let myBooks = CheckoutBooks('Michelle', 1);
// myBooks.forEach(title => console.log(title));
// let yashwanthBooks = GetTitles(true);
// yashwanthBooks.forEach(title => console.log(title));
var myBook = {
    id: 10,
    title: 'Mining of Massive Datasets',
    author: 'Jure Leskovec',
    available: true,
    category: enums_1.Category.Programming,
    markDamaged: function (reason) { return console.log(reason); }
};
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
var inventory = [
    { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
    { id: 2, title: 'Lets C', author: 'Yashwanth Kanethkar', available: false, category: enums_1.Category.Programming },
    { id: 3, title: 'Advanced Algorithms', author: 'Narsimha Karimunchi', available: true, category: enums_1.Category.Poetry }
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
var bookShelf = new shelf_1.default();
inventory.forEach(function (book) { return bookShelf.add(book); });
var firstBook = bookShelf.getFirst();
var magazines = [
    { title: 'MacWorld', publisher: 'Apple' },
    { title: 'Computer World', publisher: 'PTI' },
    { title: 'GQ', publisher: 'GQ' }
];
var magazineShelf = new shelf_1.default();
magazines.forEach(function (mag) { return magazineShelf.add(mag); });
var firstMagazine = magazineShelf.getFirst();
// let numberShelf : Shelf<number> = new Shelf<number>();
// [10, 20, 30].forEach(num => numberShelf.add(num));
// let firstNumber : number = numberShelf.getFirst();
var Testing = (function () {
    function Testing(title) {
    }
    return Testing;
}());
var testShelf = new shelf_1.default('abc');
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
var softwareBook = bookShelf.find('Lets C');
console.log(softwareBook.title + " and " + softwareBook.author);
//# sourceMappingURL=app.js.map
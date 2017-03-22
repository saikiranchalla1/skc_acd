"use strict";
var enums_1 = require("./enums");
var shelf_1 = require("./shelf");
/* Demo */
/* Type Inference */
/*let myString : string = 'this is a string';

//myString = 42;

function ReturnNumber() : number{
    return 12;
}

let anotherString = 'this is another string'; */
//anotherString = ReturnNumber();
/* enum Category {Biography, Fiction, Poetry}

console.log(Category.Fiction);

let strArray1 : string[] = ['here', 'are', 'strings'];

let strArray2 : Array<string> = ['here', 'are', 'strings'];

let anyArray : any[] = [12, true, 'string'];

//Tuples

let myTuple : [number, string] = [25, 'Activa'];

let firstElement = myTuple[0];

let secondElement = myTuple[1];

myTuple[2] = 100;

myTuple[3] = 'this is a string';


console.log(firstElement);
*/
// function CreateCustomerId(name : string, id : number) : string {
//     return name + id;
// }
// //Arrow Functions
// let arr =  allBooks.filter(function(book){
//     return book.author === 'James Joyce';
// });
// let arrDemo = allBooks.filter(book => book.author === 'James Joyce');
// myBooks.forEach(() => console.log('Done!!'));
// myBooks.forEach( title => console.log(title));
// myBooks.forEach( (title, idx, arr) => console.log(idx + ' - ' + title));
// myBooks.forEach( (title, idx, arr) => {
//     console.log(idx + ' - ' + title);
// });
/**
 * Function overloading
 *
 */
/*
function GetTitles(author : string): string[];
function GetTitles(available : boolean) : string[];
function GetTitles(bookProperty : any): string[] {
    if(typeof bookProperty == 'string'){
        //return the books for the specified author
    }else if(typeof bookProperty == 'boolean'){
        // return the books with availability as TRUE
    }

    return titles;
}

*/
/*
interface Duck {
    walk : () => void;
    swim : () => void;
    quack : () => void;
}

let probablyADuck = {
    walk : () => console.log('Walking like a Duck'),
    swim : () => console.log('Swimming like a Duck'),
    quack : () => console.log('Quacking like a Duck')
}

function FlyOverWater(bird : Duck){

}

FlyOverWater(probablyADuck);

*/
/* interface Book {
    id : number;
    title : string;
    author : string;
    available : boolean;
    pages?: number;
    markDamaged : (reason : string) => void;
}
*/
/*
function CreateCustomerId(name : string, id: number) : string{
    return name + id;
}

interface StringGenerator {
    (chars : string, nums: number ) : string;
}

// let IdGenerator : (chars : string, nums : number) => string;
let IdGenerator : StringGenerator;
IdGenerator = CreateCustomerId;

*/
/*
interface LibraryResource {
    catalogNumber : number;
}

interface Book {
    title: string;
}

interface Encyclopedia extends LibraryResource, Book {
    volume : number;
}
*/
/*
interface Librarian {
    doWork : () => void;
}

class ElementarySchoolLibrarian implements Librarian {
    doWork(){
        console.log("Reading to and teaching children from the primary");
    }
}
*/
//---------------------------------
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Biography },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest HemingWay', available: false, category: enums_1.Category.Fiction },
        { id: 3, title: 'I know why the caged bird sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Biography }
    ];
    return books;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total books: ' + numberOfBooks);
    console.log('First Available : ' + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    console.log("Getting books in category: " + categoryFilter);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookByID(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log('Creating Customer ' + name);
    if (age) {
        console.log('Age ' + age);
    }
    if (city) {
        console.log('City ' + city);
    }
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
// let x : number;
// x = 5;
// let IdGenerator : (chars : string, number : number) => string;
// IdGenerator = CreateCustomerID;
// let myID : string = IdGenerator('Anil', 10);
// console.log(myID);
//const allBooks = GetAllBooks();
//allBooks.push();
//LogFirstAvailable(allBooks);
//const poetryBooks = GetBookTitlesByCategory(Category.Poetry);
//LogBookTitles(poetryBooks);
//poetryBooks.forEach( (val, idx, arr) => console.log( ++idx + ' - ' + val));
//CreateCustomer('Kumar');
//CreateCustomer('Anil', 10);
//let hermansBooks = GetTitles('Herman Melville');
//hermansBooks.forEach(title => console.log(title));
//let checkedOutBooks = GetTitles(false);
//checkedOutBooks.forEach(title => console.log(title));
// let myBook : Book= {
//     id : 5,
//     title : 'Pride and Prejudice',
//     author : 'Jane Austen',
//     available : true,
//     category : Category.Fiction,
//     markDamaged : (reason : string) => console.log(reason);
// }
// PrintBook(myBook);
// myBook.markDamaged('torn pages and missing back cover');
// let logDamage : DamageLogger;
// logDamage = (damage : string) => console.log('Damage reported : ' + damage);
// logDamage('coffee spilled on all images');
// let favoriteAuthor : Author = {};
// let favoriteLibrarian : Librarian = {}  ;
/* let favoriteLibrarian : Librarian = new UniversityLibrarian();

favoriteLibrarian.name = "Kumar";
favoriteLibrarian.assistCustomer("Ravi"); */
/*----------------- */
/* class ReferenceItem {

    numberOfPages : number;

    // get editor() : string {
    //     //getter logic
    // }

    // set editor(newEditor : string) {
    //     //setter logic
    // }

    printChapterTitle(chapterNum : number) : void {
        //print title of the Item
    }
    constructor(title : string, publisher : string){

        //perform some initialization
    }
}

let encyclopedia  = new ReferenceItem('WorldPedia', 'WorldPub');

// class Author {
//     name : string;

//     constructor(authorName : string) {
//         name : authorName;
//     }
// }

/* Paramter Properties */
/*
class Author {

    constructor(public name : string){

    }
    
}

class Library {
    constructor(public name : string) {}

    static description : string = 'Some dummy text';
} */
/* Access Modifiers
    1) public
    2) private
    3) protected
 */
/* let ref = new ReferenceItem("Facts and Figures", 2016);

ref.printItem();

ref.publisher = "Wiley";

console.log(ref.publisher);
*/
/* let refBook = new Encyclopedia("WorldPedia", 2016, 10);

refBook.printItem();

console.log(refBook.edition);
*/
//let ref : ReferenceItem = new ReferenceItem('Updated Facts and Figures', 2012);
/* let refBook = new Encyclopedia("WorldPedia", 2016, 10);

refBook.printCitation(); */
var inventory = [
    { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Biography },
    { id: 2, title: 'A Farewell to Arms', author: 'Ernest HemingWay', available: false, category: enums_1.Category.Fiction },
    { id: 3, title: 'I know why the caged bird sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Biography }
];
//Purge<Book>(inventory);
//let purgedBooks : Array<Book> = Purge<Book>(inventory);
//purgedBooks.forEach( (book) => PrintBook(book));
var bookShelf = new shelf_1.Shelf();
inventory.forEach(function (book) { return bookShelf.add(book); });
var firstBook = bookShelf.getFirst();
console.log(firstBook);
var magazines = [
    { title: "Programming In Java", publisher: "Wiley" },
    { title: "Programming In C", publisher: "PactPub" },
    { title: "Programming In R", publisher: "McGrawHill" }
];
var magazineShelf = new shelf_1.Shelf();
magazines.forEach(function (mag) { return magazineShelf.add(mag); });
var firstMagazine = magazineShelf.getFirst();
console.log(firstMagazine);
//# sourceMappingURL=app.js.map
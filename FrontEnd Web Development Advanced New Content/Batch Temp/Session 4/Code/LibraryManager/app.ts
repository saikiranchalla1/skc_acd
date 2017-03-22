import { Category } from './enums';
import { Book , DamageLogger, Author, Librarian, Magazine} from './interface';
import {UniversityLibrarian, ReferenceItem, Encyclopedia} from './classes';
import {Purge} from './utility';
import {Shelf} from './shelf';
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

function GetAllBooks() : Book[]{
    let books = [
        {id : 1,title : 'Ulysses', author : 'James Joyce', available : true, category : Category.Biography},
        { id : 2, title : 'A Farewell to Arms', author : 'Ernest HemingWay', available : false, category: Category.Fiction},
        {id : 3,title : 'I know why the caged bird sings', author : 'Maya Angelou', available : true, category: Category.Poetry},
        {id : 4 ,title : 'Moby Dick', author : 'Herman Melville', available: true, category : Category.Biography}
    ];

    return books;
}

function LogFirstAvailable(books) : void{
    let numberOfBooks : number = books.length;
    let firstAvailable : string =  '';
    for(let currentBook of books){
        
        if(currentBook.available){
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total books: ' + numberOfBooks);
    console.log('First Available : ' + firstAvailable);
}


function GetBookTitlesByCategory(categoryFilter : Category) : Array<string>{
    console.log("Getting books in category: " + categoryFilter);

    const allBooks = GetAllBooks();
    const filteredTitles : string[] = [];

    for(let currentBook of allBooks){
        if(currentBook.category === categoryFilter){
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles : string[]) : void{
    for(let title of titles){
        console.log(title);
    }
}

function GetBookByID(id : number) {
    const allBooks = GetAllBooks();
    return allBooks.filter( book => book.id === id)[0];
}

function CreateCustomerID(name: string, id : number) : string{
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string) : void{
    console.log('Creating Customer ' + name);

    if(age){
        console.log('Age ' + age);
    }
    if(city){
        console.log('City ' + city);
    }
}

function GetTitles(author : string) : string[];
function GetTitles(available : boolean) : string[];
function GetTitles(bookProperty : any): string[]{

    const allBooks = GetAllBooks();
    const foundTitles : string[] = [];

    if(typeof bookProperty == 'string'){
        for(let book of allBooks){
            if(book.author === bookProperty){
                foundTitles.push(book.title);
            }
        }
    }else if(typeof bookProperty == 'boolean'){
        for(let book of allBooks){
            if(book.available === bookProperty){
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

function PrintBook(book : Book): void{
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

let inventory : Array<Book> = [
    {id : 1,title : 'Ulysses', author : 'James Joyce', available : true, category : Category.Biography},
        { id : 2, title : 'A Farewell to Arms', author : 'Ernest HemingWay', available : false, category: Category.Fiction},
        {id : 3,title : 'I know why the caged bird sings', author : 'Maya Angelou', available : true, category: Category.Poetry},
        {id : 4 ,title : 'Moby Dick', author : 'Herman Melville', available: true, category : Category.Biography}
];

//Purge<Book>(inventory);

//let purgedBooks : Array<Book> = Purge<Book>(inventory);

//purgedBooks.forEach( (book) => PrintBook(book));

let bookShelf : Shelf<Book> = new Shelf<Book>();

inventory.forEach( book => bookShelf.add(book));

let firstBook : Book = bookShelf.getFirst();

console.log(firstBook);

let magazines : Array<Magazine> = [
    {title : "Programming In Java", publisher : "Wiley" },
    {title : "Programming In C", publisher : "PactPub" },
    {title : "Programming In R", publisher : "McGrawHill" }
];

let magazineShelf : Shelf<Magazine> = new Shelf<Magazine>();

magazines.forEach( mag => magazineShelf.add(mag));

let firstMagazine = magazineShelf.getFirst();

console.log(firstMagazine);
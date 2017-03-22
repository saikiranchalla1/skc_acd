"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var classes_1 = require("./classes");
var utilityFunctions_1 = require("./utilityFunctions");
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'A Farewellto Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Fiction },
        { id: 3, title: 'I know why the caged bird sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Children }
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
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log('Getting books in category: ' + enums_1.Category[categoryFilter]);
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
    console.log('Creating customer: ' + name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}
function CheckoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for : ' + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        //get all books by a specific author
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        //get all books based on specificed availability
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
var Newspaper = (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_1.prototype.printCitation = function () {
        console.log("Newpaper : " + this.title);
    };
    return class_1;
}(classes_1.ReferenceItem));
var myPaper = new Newspaper('The Gazette', 2016);
myPaper.printCitation();
// class Novel extends class {title:string}{
//     mainCharacter:string;
// }
// let favoriteNovel = new Novel();
// favoriteNovel.mainCharacter;
var inventory = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: enums_1.Category.Fiction },
    { id: 11, title: 'The C Programming Language', author: 'K & R', available: true, category: enums_1.Category.Fiction },
    { id: 12, title: 'The C Programming Language', author: 'K & R', available: true, category: enums_1.Category.Fiction },
    { id: 13, title: 'The C Programming Language', author: 'K & R', available: true, category: enums_1.Category.Fiction }
];
var purgedBoks = utilityFunctions_1.Purge(inventory);
purgedBoks.forEach(function (book) { return console.log(book.id); });
var purgedNum = utilityFunctions_1.Purge([1, 2, 3, 4, 5, 6,]);
console.log(purgedNum);
//# sourceMappingURL=app.js.map
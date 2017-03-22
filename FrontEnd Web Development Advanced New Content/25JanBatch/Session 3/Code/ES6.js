// /**
//  * Created by SaiKiran on 30/01/17.
//  */
//
// //let salaries = [1,2,3,4,5,6];
//
// // for(let x of salaries){
// //     console.log(x);
// // }
//
// //let salaries = Array.of(10000);
// //console.log(salaries);
//
// let amounts = [800, 810, 820];
// //let salaries = Array.from(amounts, v => v+100);
//
// // let salaries = Array.from(amounts, function(v){
// //     return v + this.adjustment;
// // }, { adjustment : 50});
//
//
// // let salaries = Array.from(amounts,
// //         v => v + this.adjustment ,
// //         { adjustment : 50});
//
// // console.log(this.adjustment);
// // console.log(salaries);
//
//
// let salaries = [600, 700, 800];
//
// //salaries.fill(900, -1);
//
// //let result = salaries.find(v => v > 700);
//
// // let result = salaries.findIndex(function (value, index, array) {
// //     return value == this;
// // }, 700);
// //
// //
// // console.log(result);
// // console.log(salaries);
// //
// // salaries.copyWithin(2, 0);
// // console.log(salaries);
//
// var showCategories = function (productId, ...categories) {
//     console.log(categories instanceof Array);
//
//     console.log(categories);
//
//     console.log(arguments.length);
// }
//
// showCategories(123, 'search', 'marketing', 'sales', 'training');
//
//
// function sum(){
//     var result = 0;
//     for(let x of arguments){
//         result += x;
//     }
//
//     return result;
// }
//
// console.log(sum(1,2,3,4,5,6));
//
// var prices = [12, 20, 18];
//
// console.log(prices);
// console.log(...prices);
//
// var newPriceArray = Array( ...[ , , ]);
//
// console.log(newPriceArray);

//Symbol -- a unique identifier and immutable data type.
// identifier for the object properties.

let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol);

console.log(eventSymbol.toString());


const CALCULATE_EVENT_SYMBOL =  Symbol('calculate event');
console.log(CALCULATE_EVENT_SYMBOL.toString());

// let s = Symbol.for('event');
// console.log(s.toString());

// let s1 = Symbol.for('event');
// let s2 = Symbol.for('event2');
//
// console.log(s1 === s2);
//
// console.log(Symbol.keyFor(s1));
//
// let article = {
//     title : 'My Article title',
//     [Symbol.for('article')] : 'Article text'
// };
//
// let value = article[Symbol.for('article')];
// console.log(value);
//
//
// console.log(Object.getOwnPropertyNames(article));
// console.log(Object.getOwnPropertySymbols(article));

// console.log(Object.prototype.toString.call('foo'));
// console.log(Object.prototype.toString.call([1, 2]));
// console.log(Object.prototype.toString.call(1));
// console.log(Object.prototype.toString.call(true));
// console.log(Object.prototype.toString.call(null));
//
// let Blog = function () {
//     //constructors
// };
//
// Blog.prototype[Symbol.toStringTag] = 'Blog Class';
// let blog = new Blog();
//
// console.log(blog.toString());

var alpha = ['a', 'b', 'c'];
var numbers = [1, 2, 3];

var alphanumericArray = alpha.concat(numbers);
console.log(alphanumericArray);


numbers[Symbol.isConcatSpreadable] = false;
alphanumericArray = alpha.concat(numbers);

console.log(alphanumericArray);



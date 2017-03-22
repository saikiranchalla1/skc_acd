'use strict';
/**
 * Created by SaiKiran on 18/02/17.
 */
//let productId = 12;
// {
//     let productId = 2000;
// }
// console.log(productId);
//
// function updateProductId(){
//     productId = 12;
//
// }
// let productId = null;
// updateProductId();
// console.log(productId);


// let productId = 42;
//
// for(let productId = 0; productId < 10; productId++){
//     console.log(productId)
// }
//
// console.log(productId);

// let updateFunctions = [];
// for(var i=0; i<2; i++){
//     updateFunctions.push(function() {
//         return i;
//     } );
// }
//
// console.log(updateFunctions[0]());




// testVals = [];
// for(var j = 10; j >0; j--){
//     testVals.push(j);
// }
// console.log(testVals);


// const MARK_UP  = 100;
// // MARK_UP = 10;
// // console.log(MARK_UP)
//
// if(MARK_UP > 100){
//     const MARK_UP = 10;
// }
// console.log(MARK_UP);

//Arrow Functions

// var getPrice = (count, tax) => {
//     var price = count * 4.00;
//     price *= (1 + tax);
//     return price;
// };
//
// function getPrice(count, tax){
        //var price = 0;
        //price = count * 4.00 * (1+tax);
        // return price;
//     return count * 4.00 * (1 + tax);
// }
// console.log(typeof getPrice);
// console.log(getPrice());
//console.log(getPrice(2, 0.07));

// var invoice = {
//         number : 123,
//         process : function () {
//             //console.log(this);
//             return () => console.log(this.number);
//         }
//     };
//     //process : () => console.log(this);
//     //console.log(typeof invoice.process());
//     invoice.process()();

// var getPrice = () => 5.99;
// console.log(typeof getPrice);


//Rest and Spread operators

// var showCategories = function (productId, ...categories) {
//     console.log(categories instanceof Array);
//     console.log(categories);
//     console.log('Arguments length:' + arguments.length);
//     }
//     showCategories(123, 'search', 'advertising', 'marketing');
//     console.log(showCategories.length);


// var prices = [12, 20, 34];
// var maxPrice = Math.max(...prices);
// console.log(maxPrice);
//
// console.log(...prices);
// console.log(prices);

// var maxCode = Math.max(..."54321");
// console.log(maxCode);
//
// console.log(..."54321");

// var categories = ['hardware', 'software', 'vaporware'];
//
// for(var item in categories){
//     console.log(item);
// }
// for(var item of categories){
//     console.log(item);
// }

//Destructuring
// let salary = ['32000', '45000'];
//
// let [low, average, high= '88000'] = salary;
// console.log(high);

// let salary = ['32000', '50000', ['88000', '99000']];
// let [low, average, [actualLow, actualHigh]] = salary;
//
// console.log(actualLow);


// let salary = ['32000', '45000'];
// let low, average, high;
// [low, average, high= '88000'] = salary;
// console.log(high);

let salary = {
        low : '32000',
        average : '50000',
        high: '75000'
    };



// let newLow, newAverage, newHigh;
// ({ low:newLow, average: newAverage, high:newHigh } = salary);
// console.log(newHigh);

// let [maxCode, minCode] = 'AZ';
// console.log(`min ${minCode}, max ${maxCode}`);//interpolation


//Collections

// let salaries = Array.of(9000);
//
// console.log(salaries.length);

let amounts  = [800, 810, 820];
//let salaries = Array.from(amounts, v => v + 100);
// let salaries = Array.from(amounts, function(v){
//     return v + this.adjustment;
// }, { adjustment : 50});

// let salaries = Array.from(amounts, v => v + this.adjustment, { adjustment : 50});

let salaries = [600, 700, 800];

//salaries.fill(900, 1, 2);
// salaries.fill(900, -1);
// console.log(salaries);

//let result = salaries.find(value => value >= 650);
// let result = salaries.findIndex(function(value, index, array){
//     return value == this;
// }, 700);
// console.log(result);

// salaries.copyWithin(2, 0);
// console.log(salaries);

// let ids = [1, 2, 3, 4, 5];
// ids.copyWithin(3, 0, 2);
// console.log(ids);

//let ids = ['A', 'B', 'C'];
//console.log(...ids.entries());
//console.log(...ids.keys());
//console.log(...ids.values()); //DIDNT WORK

// let employee1 = {name : 'Jake'};
// let employee2 = {name : 'Janet'};
//
// let arr = [
//     [employee1, 'ABC'],
//     [employee2, '123']
// ]
//
// let employees = new Map(arr);
// employees.set(employee1, 'ABC');
// employees.set(employee2, '123');

// console.log(employees.get(employee1));
// console.log(employees.size);

//employees.delete(employee2);
// console.log(employees.size);
//
// employees.clear();
// console.log(employees.size);

//console.log(employees.has(employee2));

// let list = [...employees.values()];
// console.log(list);

//let list = [...employees.entries()];

//console.log(list[0][1]);

// let perks = new Set([
//     'Car',
//     '10 Weeks vacation',
//     'Jet'
// ]);

// perks.add('Car');
// perks.add('Super Long Vacation');
//
// perks.add('Car');
// console.log(perks.size);
//
// let newPerks = new Set(perks);
// console.log(newPerks.size);
//
// console.log(perks.has('Jet'));
//
// console.log(...perks.keys());
// console.log(...perks.values());
// console.log(...perks.entries());

// let perks = new Set([
//     {id : 800},
//     {id : 800}
// ]);

let perks = new Set([
    1,
    '1'
]);

console.log(perks.size);
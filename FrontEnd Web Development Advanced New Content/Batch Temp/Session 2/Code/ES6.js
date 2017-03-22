'use strict'
console.log(productId);
var productId = 12;

//let
console.log(productId);
let productId = 12;

let productId = 12;
console.log(productId);

let productId;
console.log(productId);

//
let productId = 12;
{
	let productId = 2000;
}
console.log(productId);

//
function updateProductId () {
	productId = 12;
}

let productId = null;
updateProductId();
console.log(productId);

//
let productId = 42;
for(let productId = 0; productId < 10; productId++){

}

console.log(productId);

//
let updateFunction = [];
for(var i = 0; i <2; i++){
	updateFunction.push(function() { return i;});

}
console.log(updateFunction[0]());


/**
 * Created by SaiKiran on 16/12/16.
 */

/*let updateFunction = [];
for(let i = 0; i <2; i++){
    updateFunction.push(function() { return i;});

}
console.log(updateFunction[1]()); */

//
/*const MARKUP_PCT = 100;
console.log(MARKUP_PCT); */

/*const MARKUP_PCT;
console.log(MARKUP_PCT);*/

/*const MARKUP_PCT = 100;
MARKUP_PCT = 10;
console.log(MARKUP_PCT);*/

/*const MARKUP_PCT = 100;

if(MARKUP_PCT > 0){
    const MARKUP_PCT = 10;
}
console.log(MARKUP_PCT);*/

//Arrow Functions   =>
/*var getPrice = () => 5.99;
console.log(typeof getPrice);*/

/*var getPrice = count => count * 4.00;
console.log(getPrice(2));*/

/*var getPrice = (count, tax) => count * 4.00 * (1 + tax);
console.log(getPrice(2, 0.7));*/

/*
var getPrice = (count, tax) => {
    var price = count * 4.00;
    price  *= (1 + tax);
    return price;
};
console.log(getPrice(2, 0.7));
*/

/*document.addEventListener('click', () => console.log(this));*/

/*var invoice = {
    number : 123,
    process : () => console.log(this)
};
invoice.process();*/

/*var invoice = {
    number : 123,
    process : function(){
        return () => console.log(this.number);
    }
};
invoice.process()();*/


//Default function parameters
/*var getProduct = function (productId = 1000) {
    console.log(productId);
};

getProduct();*/


/*var getProduct = function (productId = 1000, type = 'software') {
    console.log(productId + ', ' + type);
};

getProduct(undefined, 'hardware');*/

/*var generateBaseTax = () => 0.07;
var baseTax = 0.07;
var getTotal = function (price = 1000, tax = price * generateBaseTax()) {
    console.log(price + tax);
};

getTotal(5.00);*/

/*function demo(){
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

demo(12,3,4,5,6,7);*/

/*var getTotal = function(price, tax = 0.07){
    console.log(arguments.length);
};

getTotal(5.00);*/


/*var getTotal = function(price = tax, tax = 0.07){
    console.log(arguments.length);
};

getTotal();*/

/*var showCategories = function(productId, ...categories){
    /!*console.log(typeof categories);
    console.log(categories);*!/
    console.log(arguments.length);
};*/

/*showCategories(123, 'search', 'advertising', 'acadgild');*/

/*showCategories(123);*/

/*console.log(showCategories.length);*/

/*
showCategories(123, 'search', 'advertising', 'acadgild');*/
/*

var prices = [12, 23, 45];
console.log(prices);
console.log(...prices);
var maxPrice = Math.max(...prices);
console.log(maxPrice);

console.log('-----------');
var newArray = [...prices];
console.log(newArray);

console.log(...[ , , ]);
console.log(Array(...[, ,]));

console.log(..."987654321");

console.log(["A", ..."BCDE", "F"]);*/

/*
var categories = ['hardware', 'software', 'vaporware'];

for(var item of categories){
    console.log(item);
}*/


/*var value = 0B10;
console.log(value);*/











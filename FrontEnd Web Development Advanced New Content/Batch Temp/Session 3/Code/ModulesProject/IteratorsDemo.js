/**
 * Created by saikiranchalla on 12/17/2016.
 */
// let eventSymbol = Symbol('resize event');
//
// const CALCULATE_EVENT_SYMBOL = Symbol('calculate event');
// console.log(eventSymbol.toString());
//
// console.log(CALCULATE_EVENT_SYMBOL.toString());


// let s = Symbol('event');
// let s2 = Symbol('event');
//
// console.log(s === s2);

// let s = Symbol.for('event');
// let s2 = Symbol.for('event');
//
// console.log(s === s2);
//
// console.log(Symbol.keyFor(s));


// let article = {
//     title : 'My article',
//     [Symbol.for('article')] : 'My Dummy Article for Symbol Demo'
// };
//
// let value = article[Symbol.for('article')];
//
// console.log(value);

// let ids = [9000, 9001, 9002];
//
// //console.log(typeof ids[Symbol.iterator]);
//
// let it = ids[Symbol.iterator]();
//
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
//
// console.log(it.next());

// let idMaker = {
//     [Symbol.iterator]() {
//         let nextId = 8000;
//         return {
//             next() {
//                 return {
//                     value : nextId++,
//                     done : false
//                 }
//             }
//         }
//     }
// }

//let it = idMaker[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

//
// for(let v of idMaker){
//     if(v > 8005) break;
//     console.log(v);
// }


function *process(){
    // yield 8000;
    // yield 8001;
    // let nextId = 8000;
    // while(true){
    //     yield(nextId++);
    // }

    let result = yield;
    console.log(`result is ${result}`);
}

let it = process();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
//

it.next();
console.log(it.next(200));
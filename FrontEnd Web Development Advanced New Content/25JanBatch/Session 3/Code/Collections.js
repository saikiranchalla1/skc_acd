/**
 * Created by SaiKiran on 01/02/17.
 */
let employee1 = {name : 'Jake'};
let employee2 = {name : 'Jack'};

let arr = [
    [employee1, 'ABC'],
    [employee2, '123']
]
//let employees = new Map(arr);
let employees = new WeakMap(arr);
// employees.set(employee1, 'ABC');
// employees.set(employee2, '123');

console.log(employees.get(employee1));
console.log(employees.size);

// console.log(employees.delete(employee2));
//
// console.log(employees.size);
//
// console.log(employees.has(employee2));

// console.log(employees.clear());
// console.log(employees.size);

// console.log(employees.values());
// console.log(employees.entries());

employee1 = null;

console.log(employees.size);
var animal = { eats: true }
var rabbit = { jumps: true }

rabbit.__proto__ = animal  // inherit

alert(rabbit.eats) // true

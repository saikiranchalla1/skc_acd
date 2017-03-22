var animal = { eats: true }
var fedUpRabbit = { eats: false} //same property in animal as well

fedUpRabbit.__proto__ = animal  

alert(fedUpRabbit.eats) // false

var animal = {
  eat: function() { 
    console.log( "I'm full" )
    this.full = true
  }
}

var rabbit = { 
  jump: function() { /* something */ }
}

rabbit.__proto__ = animal  

rabbit.eat()
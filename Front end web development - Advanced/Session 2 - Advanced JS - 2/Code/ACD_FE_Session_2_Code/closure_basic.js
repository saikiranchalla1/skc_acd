function outerFunc(param){
	var privateVar = 5;
  var innerFunc = function (input){
     alert('param passed to function  is '+ param + 'and private variable is '+privateVar );
    var sum = privateVar+input+param;
     alert('addition of private var and input and param is '+sum);

  }
  return innerFunc;
}
var closureFunc = outerFunc(12);
closureFunc(4);

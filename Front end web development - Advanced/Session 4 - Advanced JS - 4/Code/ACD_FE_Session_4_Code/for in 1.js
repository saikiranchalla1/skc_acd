var obj = {a:1, b:2, c:3};
var array = [1,2,3,4];
for (var prop in array) {
  console.log("obj." + prop + " = " + array[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3


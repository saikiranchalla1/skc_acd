function test() {
	alert('inside test');
	return function () {
	alert('inside returned function');
	};
}
var newFunc = test();
newFunc();
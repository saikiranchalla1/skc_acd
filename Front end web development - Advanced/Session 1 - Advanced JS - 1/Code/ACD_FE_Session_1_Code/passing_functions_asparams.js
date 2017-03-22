function invokeSum(a, b) {
	return a() + b();
}
function returnOne() {
	return 1;
}
function returnTwo() {
	return 2;
}
alert(invokeSum(returnOne, returnTwo))
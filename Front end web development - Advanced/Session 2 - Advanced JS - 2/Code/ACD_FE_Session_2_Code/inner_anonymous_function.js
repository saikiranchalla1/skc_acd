var outerFunc = function (param) {
	
var innerFunc = function (innerParam) {
	return innerParam * 4;
};
	return 'result is ' + innerFunc(param);
};
outerFunc(12);
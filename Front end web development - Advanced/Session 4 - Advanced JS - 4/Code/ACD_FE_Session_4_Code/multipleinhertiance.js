function multiInheritance() {
	var n = {};
	stuff;
	j = 0;
	length = arguments.length;
	for (j = 0; j <length; j++) {
		stuff = arguments[j];
		for (var index in stuff) {
			if (stuff.hasOwnProperty(index)) {
				n[index] = stuff[index];
			}
		}
	}
	return n;
}
var n = multiInheritance(p1, p2, p3);
var findMinAndMax = function(numArray) {
	var min = Math.min.apply(null, numArray);
	var max = Math.max.apply(null, numArray);
	console.log("Min -> " + min);
	console.log("Max -> " + max);
};

findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);
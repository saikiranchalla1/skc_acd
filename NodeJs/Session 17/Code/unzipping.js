var fs = require('fs');

var zlib = require('zlib');


fs.createReadStream('input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('new_file.txt'));


console.log("Program ended");
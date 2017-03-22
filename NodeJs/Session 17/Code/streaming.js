var fs = require('fs');

var zlib = require('zlib');

var readerStream = fs.createReadStream('input.txt');
	fs.createReadStream('input.txt')
	.createReadStream('input 2.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.txt.gz'));


fs.createReadStream('input.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('new_file.txt'));


readerStream.on('error', function(err){
	console.log(err.stack);
});


function compressFile(filename, cb){
	var compression = zlib.createGzip();
	var input = fs.createReadStream(filename);
	var output = fs.createWriteStream(filename + '.gz');

	input.pipe(compression).pipe(output);
}
console.log(process.env.NODE_ENV);
console.log("Program ended");




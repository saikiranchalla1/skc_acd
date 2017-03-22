var fs = require('fs');

var data = "testing writable data stream in nodejs";

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data, 'UTF8');

writerStream.end();


writerStream.on('finish', function(){
	console.log("Write Completed");
});

writerStream.on('error', function(err){
	console.log(err.stack);
});

console.log("Program Ended!!!");
var fs = require("fs");
var data = '';

//creating a readable stream.

var readerstream = fs.createReadStream('input.txt');

//set the encoding
readerstream.setEncoding('UTF8');

//handling the stream events
readerstream.on('data', function(chunk){
	console.log(chunk);
	console.log("--------------------------");
	data += chunk;
});

readerstream.on('end', function(){
	console.log("Final data received: " +data);
});

readerstream.on('error', function(err){
	console.log(err.stack);
});

console.log("End of program");
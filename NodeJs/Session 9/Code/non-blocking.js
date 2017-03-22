var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res){
	fs.readFile("sample.txt", "utf-8", function(error, data){
		res.end(data);
		console.log(data);
	});
});

server.listen(3000);
console.log('Server running on port number 3000');
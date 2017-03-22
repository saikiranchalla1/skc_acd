var http = require('http');

var fs = require('fs');

var index = fs.readFileSync(__dirname + '/index.html');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/html'});
	// res.write('hello world');

	res.end(index);


});

var io = require('socket.io').listen(server);


function sendTime(){
	io.sockets.emit('time',  {
		time : new Date().toJSON()
	});
}
setInterval(sendTime, 10000);

io.sockets.on('connection', function(socket){
	socket.emit('welcome', {
		message : 'Welcome!!!'
	});
	socket.on('i am a client', console.log);
});

server.listen(3000, function(){
	console.log("Application is running at port 3000");
})
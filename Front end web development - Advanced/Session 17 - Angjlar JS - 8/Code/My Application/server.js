var connect = require('connect');

connect.createServer(
	connect.static("../myApplication")
).listen(5000);
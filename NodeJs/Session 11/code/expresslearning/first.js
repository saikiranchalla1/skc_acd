var express = require('express');

var app = express();

var myLogFunction = function(req, res, next){
	console.log('My Logger');
	next();
}

var requestTime = function(req, res, next){
	req.reqTime = Date.now();
	next();
}

app.use(myLogFunction);
app.use(requestTime);

//app.METHOD()
app.get('/', function(req, res, next){
	// res.send('Hello world');

	var responseText = "<h3>Request Time is: " + req.reqTime + "</h3>";
	res.send(responseText);
	next();
});

app.use('/user/:id', function(req, res, next){
	console.log("Request type: " + req.method);
	next();
},
function(req, res, next){
	console.log("Request URL: " + req.originalUrl);
	next();
});


app.get('/user/:id', function(req, res, next){
	console.log('ID: ' + req.params.id);
	if(req.params.id == 0){
		next('route');
	}else{
		next();	
	}
	//next('route'); app.METHOD();
}, function(req, res, next){
	res.send('Testing User information');
})
var server = app.listen(8987, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log(host + " " + port);
});




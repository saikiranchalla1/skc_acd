//app.METHOD(PATH, HANDER);

var express = require('express');
var app = express();

//root route
app.get('/', function(req, res){
	res.send('Hello World!!!');
});

app.post('/', function(req, res){
	res.send('Testing POST request!!!');
});

app.put('/user', function(req, res){
	res.send('Request received from /user');
});

app.delete('/user', function(req, res){
	res.send('Delete request received!!');
});

//about route
app.get('/about', function(req, res){
	res.send('about page!!');
});

app.get('/random.text', function(req, res){
	res.send('random.text');
});

//abc, abcd
app.get('/ab?cd', function(req, res){
	res.send('ab?cd');
});

//abcd, abbcd, abbbcd....
app.get('/ab+cd', function(req, res){
	res.send('ab+cd');
});

//abcd, abxcd, abRANDOMcd....
app.get('/ab*cd', function(req, res){
	res.send('ab*cd');
});

//abe, abcde
app.get('/ab(cd)?e', function(req, res){
	res.send('ab(cd)?e');
});

// /users/USER_ID/books/BOOK_ID
app.get('/users/:userId/books/:bookId', function(req, res){
	res.send(req.params);
});

// /flights/DLI-BOM
app.get('/flights/:from-:to', function(req, res){
	res.send(req.params);
});

app.all('/test',function(req, res, next){
	console.log('Testing all!!');
	next();
});

//head, trace, copy, lock, move, purge, subscribe, unsubscribe, path, search, connect
app.listen(8789);




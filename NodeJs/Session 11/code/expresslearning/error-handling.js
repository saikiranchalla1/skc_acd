//error-handling middleware
app.use(function(err, req, res, next){
	console.log(err.stack);
	res.status(500).send('Error occured');
});
var app  = require("../app");

app.set('port',process.env.PORT || 8987);

var server = app.listen(app.get('port'), function() {
	console.log('Server listening on port : ' + server.address().port);
})
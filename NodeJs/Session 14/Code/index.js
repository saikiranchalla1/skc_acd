var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test");

var db = mongoose.connection;

db.on('error', function(err){
	console.log(err);
});

db.on('open', function(){
	var schema = mongoose.Schema;

	var mySchema = new schema({
		name : String,
		age : Number,
		address : {
			lineone : String,
			linetwo : String
		}
	});

	var Person = mongoose.model('Person', mySchema);

	// schema.methods.myMethod = function(cb){
	// 	return this.model('myModel').find({
	// 		name : this.type
	// 	}, cb);
	// }

	// myModel.myMethod(function(err, mycb){
	// 	console.log(this.name);
	// });
	
	var myDocument = new Person({
		name : 'testing',
		age : 24,
		address : {
			lineone: 'temp1',
			linetwo: 'temp2'
		}
	});

	myDocument.save(function(err, myDocument){
		if(err) {
			console.log(err);
		}else {
			//myDocument.myMethod();
		}
	});


	//myDocument.find();
});



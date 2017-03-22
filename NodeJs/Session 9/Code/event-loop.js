var events = require('events');

var eventEmitter = new events.EventEmitter();

//eventEmitter.on('eventName', eventHandler);
//eventEmitter.emit('eventName');

var connectHandler = function connected(){
	console.log('Connection Successful');

	eventEmitter.emit('data_processed');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_processed', function(){
	console.log('Data has been processed Successfully');
});

eventEmitter.emit('connection');

console.log('Program exit');
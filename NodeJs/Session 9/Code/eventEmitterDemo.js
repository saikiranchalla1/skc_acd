var events = require('events');
var eventEmitter = new events.EventEmitter();

var firstListener = function firstListener(){

	console.log('Listener 1 executed');
}

var secondListener = function secondListener(){

	console.log('Listener 2 executed');
}

eventEmitter.on('connection', firstListener);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log('Number of event listeners is ' + eventListeners);

eventEmitter.emit('connection');

//eventEmitter.removeListener(event, listener);

eventEmitter.removeListener('connection', firstListener);

console.log('First Listener has been removed');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log('Number of event listeners is ' + eventListeners);


console.log('Program Exit');
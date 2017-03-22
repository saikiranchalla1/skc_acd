var events = require("events");
var util = require('util');

//emits the event
Eventer = function(){
	events.EventEmitter.call(this);
	this.eventCbOne = function(){
		var data = "test data";
		this.emit('blamo', data);
	}

	this.eventCbTwo = function(){
		this.emit('boom');
	}
};

util.inherits(Eventer, events.EventEmitter);

Listener = function(){
	this.eventOneHandler = function(data){
		console.log(data);
	}

	this.eventTwoHandler = function(){
		console.log("Handles the BOOM event");
	}
};



var eventer = new Eventer();
var listener = new Listener();

eventer.on('blamo', listener.eventOneHandler);

eventer.on('boom', listener.eventTwoHandler);

eventer.eventCbOne();
eventer.eventCbTwo();
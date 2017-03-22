var newMod = angular.module('airlineServices', ['ngResource']);

// REST requests declared here to the Node server

newMod.factory('Airport', function($resource){
	return $resource('/airports/:airportCode');
});
newMod.factory('Flights', function($resource){
	return $resource('/flights');
});
newMod.factory('Reservations', function($resource){
	return $resource('/reservation');
});

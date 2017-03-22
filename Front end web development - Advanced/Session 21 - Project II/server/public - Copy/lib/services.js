var newMod = angular.module('airlineServices', ['ngResource']);
newMod.factory('Airport', function($resource){
	return $resource('/airports/:airportCode');
});
newMod.factory('Flights', function($resource){
	return $resource('/flights');
});
newMod.factory('Reservations', function($resource){
	return $resource('/reservations');
});
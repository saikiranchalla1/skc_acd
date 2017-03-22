angular.module('airline', [])
	.config(airlineRouter);

function airlineRouter ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/destinations.html',
		 controller: 'DestinationsCtrl'})
		.when('/flights', {template: '<h3>Flights</h3>',
		 controller: 'FlightsCtrl'})
		.when('/reservations', {template: '<h3>Your Reservations</h3>',
		 controller: 'ReservationsCtrl'});
}
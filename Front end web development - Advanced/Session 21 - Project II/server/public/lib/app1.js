var module = angular.module('airline',['airlineServices']);
		module.config(function($routeProvider){
			$routeProvider
				.when("/",{
					templateUrl:'partials/destinations.html',
					controller: function($scope){
						$scope.setActive('destinations');
						
					}
				})
				.when("/airports/:airport1/:airport2",{
					templateUrl:'partials/two_airports.html'
				})
				.when('/airports/:airportCode',{
					templateUrl : 'partials/airports.html',
					controller: 'AirportCtrl'
				})
				.when("/flights",{
					templateUrl:'partials/flights.html',
					controller: 'FlightsCtrl'})
				.when("/reservations",{
					templateUrl:'partials/reservations.html',
					controller: function($scope,Reservations, Flights){
						$scope.setActive('reservations');
						$scope.reservations = Reservations.query();
						$scope.flights = Flights.query();
						$scope.reserveFlight = function() {
							Reservations.save($scope.reserve, function(data
							{
									$scope.reserve.origin = "";
									$scope.reserve.destination ="";
									console.log(data);
									$scope.reservations.push(data);

								});
						};
						$scope.reserveFlightRp = function(param) {
							console.log(param);
							Reservations.save(param, function(data){
								param.origin = "";
								param.destination = "";
								console.log(data);
								$scope.reservations.push(data);
							});
						}
					}});
				});
				module.controller('AppCtrl', function($scope, Airport, $routeParams){
					$scope.airportTemplate = 'partials/airport.html';
					$scope.setActive = function(type){
						$scope.destinationsActive = '';
						$scope.flightsActive = '';
						$scope.reservationsActive = '';

						$scope[type + 'Active'] = 'active';
					}
					$scope.sidebarURL = 'partials/airports.html'
					$scope.setAirport = function(code){
						$scope.currentAirport = Airport.get({
							airportCode: code
						});
					}
					$scope.airports =Airport.query();
					
				});

				module.controller('ReservationsCtrl', function($scope){
					$scope.setActive('reservations');
				});
				module.controller('DestinationsCtrl', function($scope){
					$scope.setActive('destinations');
				});
				module.controller('FlightsCtrl', function($scope, Flights){
					$scope.setActive('flights');
					$scope.flights = Flights.query();
				});

				module.controller('AirportCtrl', function($scope, $routeParams, Airport)
				{
					$scope.currentAirport = Airport.get({
						airportCode: $routeParams.airportCode
					});
				
				});

				module.controller('Airport1Ctrl', function($scope, $routeParams){
					$scope.currentAirport = $scope.airports[$routeParams.airport1];				
				});
				module.controller('Airport2Ctrl', function($scope, $routeParams){
					$scope.currentAirport = $scope.airports[$routeParams.airport2];
				});
var mod1 = angular.module('airlineServices', ['ngResource']);

mod1.factory('myCache', function($cacheFactory){
    return $cacheFactory('myCache', {capacity : 3});
});
mod1.factory('Airport', function($resource, $http, $log, $q){
    //return $resource('/airports/:airportCode');
    return {
        getAirports : function(){
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: '/airports'
            }).success(function(data, status, headers, config){
                deferred.resolve(data);
            }).error(function(data,status, headers, config){
                deferred.reject(status);
            });
            $log.info(deferred.promise);
            return deferred.promise;
        }
    }
});
mod1.factory('Flights', function($resource){
    return $resource('/flights')
});
mod1.factory('Reservations', function($resource){
    return $resource('/reservations')
});

var mod = angular.module('myApp', ['ngRoute', 'airlineServices'])
    .config(function($routeProvider){
        $routeProvider
            .when("/", {
               templateUrl:'partials/destinations.html',
                controller: 'DestinationsCtrl'
            })
            .when("/flights", {
                templateUrl: 'partials/flights.html',
                controller: 'FlightsCtrl'
            })
            .when("/reservations",{
                templateUrl: 'partials/reservations.html',
                controller: 'ReservationsCtrl'
            })
            .when("/airports/:airportCode",{
                templateUrl: 'partials/airport.html',
                controller: 'AirportCtrl'
            })
            .when("/airports/:airport1/:airport2",{
                templateUrl: 'partials/two_airports.html'
            })
    })
    .controller('DestinationsCtrl', DestinationsCtrl)
    .controller('FlightsCtrl', FlightsCtrl)
    .controller('ReservationsCtrl', ReservationsCtrl)
    .controller('AirportCtrl', AirportCtrl)
    .controller('Airport1Ctrl', Airport1Ctrl)
    .controller('Airport2Ctrl', Airport2Ctrl)
    .controller('myCtrl', function($scope, Airport){
        $scope.airportTemplate = 'partials/airport.html';
        $scope.setActive = function(type, Airport){
            $scope.destinationsActive = '';
            $scope.flightsActive = '';
            $scope.reservationsActive = '';

            $scope[type + 'Active'] = 'active';
        };
       
        /*Airport.getAirports(function(data){
            $scope.airports = data;
        });*/

        
        Airport.getAirports().then(function(data){
            console.log(data);
            $scope.airports = data;
        }, function(status){
            console.log(status);
        });
        
});
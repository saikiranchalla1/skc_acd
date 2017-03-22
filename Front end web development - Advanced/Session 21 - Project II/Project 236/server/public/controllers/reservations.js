function ReservationsCtrl($scope, Reservations, Flights){
    $scope.setActive('reservations');

    $scope.reserveFlight = function(){
    	Reservations.save({});
    	Reservations.save(
    		$scope.reserve, function(data){
    			$scope.reserve.origin = '';
    			$scope.reserve.destination = '';

    			$scope.reservations.push(data);
    		}
    	);
    }

    $scope.reservations = Reservations.query();
    $scope.flights = Flights.query();
}
function DestinationsCtrl($scope, Airport){
    $scope.setActive('destinations');
    $scope.currentAirport = null;
    $scope.setAirport = function(code){
        $scope.currentAirport = Airport.get({airportCode : code});
    }
    $scope.sidebarURL = 'partials/airport.html';
    $scope.formURL = 'partials/form.html'
    $scope.editAirport = function (code) {
        $scope.editing = $scope.airports[code]
    }

}
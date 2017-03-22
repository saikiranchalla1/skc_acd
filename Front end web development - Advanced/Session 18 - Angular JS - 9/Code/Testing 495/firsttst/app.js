var module = angular.module("myApp", []);
	module.controller("myCtrl", function($scope, $http, $interval, $timeout, $log){
		$scope.counter = 0;

		$scope.intervalCounter = 0;
		$scope.timerCounter = 0;

		$interval(function(){
			$scope.intervalCounter++;
		}, 5000, 10);

		$timeout(function(){
			$scope.timerCounter++;
		}, 5000);


		$scope.incrementCount = function(){
			$scope.counter++;
		}

		$http.get("products.json").success(function(data){
			$scope.products = data;
			$log.log("There are " + data.length + " items");
		});
	});

module.filter("labelCase", function(){
	return function(value, reverse){
		if(angular.isString(value)){
			var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
			return (reverse ? intermediate[0].toLowerCase() : intermediate[0].toUpperCase()) + intermediate.substr(1);
		}else{
			return value;
		}
	}
});


module.directive("unorderedList", function(){
	return function(scope, element, attrs){
		var data = scope[attrs["unorderedList"]];

		if(angular.isArray(data)){
			var listElem = angular.element("<ul>");
			element.append(listElem);

			for(var i =0; i<data.length; i++){
				listElem.append(angular.element('<li>').text(data[i].name));
			}
		}
	}
});






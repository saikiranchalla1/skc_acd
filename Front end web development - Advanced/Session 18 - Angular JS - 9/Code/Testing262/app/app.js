var module = angular.module("myApp", []);
module.controller("myCtrl", function($scope){
    $scope.counter = 0;
    $scope.incrementCounter = function(){
			$scope.counter++;
    };
	
	$scope.data = [{name : "Apple", category:"Fruit"},
			{name : "Apple", category:"Fruit"},
			{name : "Apple", category:"Fruit"}];
});
 module.filter("labelCase",function(){
 	return function(value, reverse){
 		if(angular.isString(value)){
 			var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();
 			return (reverse ? intermediate[0].toLowerCase() : intermediate[0].toUpperCase()) + intermediate.substr(1);
 		}else{
 			return value;
 		}
 	};
 });
 
 module.directive("unorderedList", function(){
	return function(scope, element, attrs){
		var data = scope[attrs["unorderedList"]];
		if(angular.isArray(data)){
			var listElem = angular.element("<ul>");
			element.append(listElem);
			for(var i = 0; i <data.length; i++){
				listElem.append(angular.element('<li>').text(data[i].name));
			}
		}
	} 
 });
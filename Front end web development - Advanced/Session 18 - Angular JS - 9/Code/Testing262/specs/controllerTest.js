describe("Controller Test", function(){
	//Arrange
	var mockScope = {};
	var controller;

	beforeEach(angular.mock.module("myApp"));

	beforeEach(angular.mock.inject(function($controller, $rootScope){
		mockScope = $rootScope.$new();
		controller = $controller("myCtrl", {
			$scope : mockScope
		});
	}));

	it("Creates Variable", function(){
		expect(mockScope.counter).toEqual(0);
	})

	it("Increment Counter", function(){
		mockScope.incrementCounter();
		expect(mockScope.counter).toEqual(1);
	});
})
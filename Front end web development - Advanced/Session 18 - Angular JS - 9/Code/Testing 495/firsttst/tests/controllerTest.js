describe("Controller Test", function(){
	//Arrange
	var mockScope = {};
	var Controller;
	var backend, mockInterval, mockTimeout, mockLog;

	beforeEach(angular.mock.module("myApp"));

	beforeEach(angular.mock.inject(function($httpBackend){
		backend = $httpBackend;

		backend.expect("GET", "products.json").respond(
			[
				{"name":"Apples", "category":"Fruit","price": 1.20,"expiry":10},
				{"name":"Bananas", "category":"Fruit","price": 1.20,"expiry":10},
				{"name":"Grapes", "category":"Fruit","price": 1.20,"expiry":10},
				{"name":"Tuna", "category":"Fish","price": 2.20,"expiry":30},
				{"name":"Salmon", "category":"Fish","price": 5.40,"expiry":20}
			]
			);
	}));

	beforeEach(angular.mock.inject(function($controller, $rootScope, $http, $interval, $timeout, $log){
		mockScope = $rootScope.$new();
		mockTimeout = $timeout;
		mockInterval = $interval;
		mockLog = $log;
		controller = $controller("myCtrl", {
			$scope : mockScope,
			$http : $http,
			$interval : mockInterval,
			$timeout : mockTimeout,
			$log : mockLog
		});

		backend.flush();
	}));

	//Act and Assert

	it("Create variable", function(){
		expect(mockScope.counter).toEqual(0);
	})

	it("Increment Counter", function(){
		mockScope.incrementCount();
		expect(mockScope.counter).toEqual(1);
	});


	it("Makes an Ajax", function(){
		backend.verifyNoOutstandingExpectation();
	});

	it("Process the data", function(){
		expect(mockScope.products).toBeDefined();
		expect(mockScope.products.length).toEqual(5);
	});

	it("Preserves the data order", function(){
		expect(mockScope.products[0].name).toEqual("Apples");
		expect(mockScope.products[2].name).toEqual("Grapes");
	});

	it("Limits interval to 10 updates", function(){
		for(var i =0; i < 10; i++){
			mockInterval.flush(5000);
		}

		expect(mockScope.intervalCounter).toEqual(10);
	});

	it("Increments timer counter", function(){
		mockTimeout.flush(5000);
		expect(mockScope.timerCounter).toEqual(1);
	});

	it("Writes log messages", function(){
		expect(mockLog.log.logs.length).toEqual(1);
	})
});
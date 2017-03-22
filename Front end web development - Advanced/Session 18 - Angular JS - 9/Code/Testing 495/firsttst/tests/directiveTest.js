describe("Directive Tests", function(){
	var mockScope;
	var compileService;

	beforeEach(angular.mock.module("myApp"));

	beforeEach(angular.mock.inject(function($rootScope, $compile){
		mockScope = $rootScope.$new();

		compileService = $compile;

		mockScope.data = [
				{"name":"Apples", "category":"Fruit","price": 1.20,"expiry":10},
				{"name":"Bananas", "category":"Fruit","price": 1.20,"expiry":10},
				{"name":"Grapes", "category":"Fruit","price": 1.20,"expiry":10},
				{"name":"Tuna", "category":"Fish","price": 2.20,"expiry":30},
				{"name":"Salmon", "category":"Fish","price": 5.40,"expiry":20}
			]
	}));


	it("Generates list element", function(){
		var compileFn = compileService("<div unordered-list='data'></div>");

		var element = compileFn(mockScope);

		expect(element.children("ul").length).toEqual(1);
		expect(element.find("li").length).toEqual(5);

		expect(element.find("li").eq(0).text()).toEqual("Apples");

	})
});
describe("Directive Tests", function(){
	var mockScope;
	var compileService;

	beforeEach(angular.mock.module("myApp"));

	beforeEach(angular.mockS.inject(function($rootScope, $compile){
		mockScope = $rootScope.$new();
		compileService = $compile;
		mockScope.data = [
			{name : "Apple", category:"Fruit"},
			{name : "Apple", category:"Fruit"},
			{name : "Apple", category:"Fruit"}
		]
	}));

	it("Generates list element", function(){
		var compileFn = compileService("<div unordered-list='data'></div>");
		var elem = compileFn(mockScope);

		expect(elem.children("ul").length).toEqual(1);
		expect(elem.find("li").length).toEqual(3);
		expect(elem.find("li").eq(0).text()).toEqual("Apple");
	})
})
describe("Filter Tests", function(){
	var filterInstance;

	beforeEach(angular.mock.inject("myApp"));

	beforeEach(angular.mock.inject(function($filter){
		filterInstance = $filter("labelCase");
	}));

	it("Changes Case", function(){
		var result = filterInstance("test phase");
		expect(result).toEqual("Test Phase");
	});

	it("Reverse Case", function(){
		var result = filterInstance("test phase", true);
		expect(result).toEqual("tEST PHASE");
	});
})
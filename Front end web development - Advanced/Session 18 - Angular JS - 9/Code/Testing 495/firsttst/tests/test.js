describe("First Test", function(){
	//Arrange
	var counter;

	beforeEach(function(){
		counter = 0;
	});

	it("increments value", function(){
		//Act
		counter++;
		//Assert
		expect(counter).toEqual(1);
	});

	it("decrements value", function(){
		//Act
		counter--;
		//Assert
		expect(counter).toEqual(-1);
	});
})
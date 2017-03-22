describe("First Test", function(){
	//AAA
	//Arrange
	var counter;

	beforeEach(function(){
		counter = 0;
	});

	it("increments the value", function(){
		//Act
		counter++;
		//Assert
		expect(counter).toEqual(1);
		/*
			expect(x).toBe(obj)
			expect(x).toMatch(regex)
			expect(x).toBeDefined()
			expect(x).toBeUndefined()
			expect(x).toBeNull()
			expect(x).toBeTruthy()
			expect(X).toBeFalsy()
			expect(x).toBeGreaterThan(y)

			expect(x).not.toEqual(value)
		*/
	})

	it("decrements the value", function(){
		//Act
		counter--;
		//Assert
		expect(counter).toEqual(-1);
	})
})
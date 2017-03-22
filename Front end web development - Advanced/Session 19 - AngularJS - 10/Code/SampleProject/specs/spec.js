describe('Acadgild Protractor App Demo', function(){

	var counter;
	beforeEach(function(){
		counter = 0;
	});
		
	it('increment', function(){
		counter++;
		expect(counter).toEqual(1)
	});
	it('decrement', function(){
		counter--;
		expect(counter).toEqual(-1)
	});
	
});
describe('Acadgild Protractor Demo All', function(){
	var fNumber = element(by.model('first'));
	var sNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var resultFinal = element(by.binding('latest'));
	var history = element.all(by.repeater('result in memory'));
	
	function add(a, b){
		fNumber.sendKeys(a);
		sNumber.sendKeys(b);
		goButton.click();
	}
	
	beforeEach(function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
	});
	
	it('testing history', function(){
		add(1,2);
		add(3,4);
		
		expect(history.count()).toEqual(2);
		
		add(5,6);
		
		expect(history.count()).toEqual(3);
	});
});

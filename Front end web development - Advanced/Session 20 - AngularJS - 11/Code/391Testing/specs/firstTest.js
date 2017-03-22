describe("Protractor Demo", function(){
	var firstNumber = element(by.model('first'));
	var secondNumber = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var latest = element(by.binding('latest'));
	var history = element.all(by.repeater('result in memory'));


	beforeEach(function(){
		browser.get('http://juliemr.github.io/protractor-demo');
	});


	it('test 1', function(){
		

		expect(browser.getTitle()).toEqual('Super Calculator');
	});

	it('adding 1 and 2', function(){
		
		firstNumber.sendKeys(1);
		secondNumber.sendKeys(2);

		goButton.click();

		expect(latest.getText()).toEqual('3');
	});

	it('adding 5 and 6', function(){
		
		firstNumber.sendKeys(5);
		secondNumber.sendKeys(6);

		goButton.click();

		expect(latest.getText()).toEqual('11');
	});

	it('testing history', function(){
		add(6,7);
		add(10,20);
		add(12,13);

		expect(history.count()).toEqual(3);
	});


	function add(a, b) {
		firstNumber.sendKeys(a);
		secondNumber.sendKeys(b);

		goButton.click();
	}
});
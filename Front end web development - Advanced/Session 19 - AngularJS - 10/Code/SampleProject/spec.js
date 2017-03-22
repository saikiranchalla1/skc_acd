describe('Protractor Demo', function(){
	it('Check title', function(){
		browser.get('http://juliemr.github.io/protractor-demo/');
		expect(browser.getTitle()).toEqual('Super Calculator');
	});
});
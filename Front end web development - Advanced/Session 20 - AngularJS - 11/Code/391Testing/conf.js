exports.config = {
	seleniumAddress : 'http://localhost:4444/wd/hub',
	specs: ['specs/firstTest.js'],
	/*multiCapabilities: [
		{
			browserName: 'firefox'
		},
		{
			browserName: 'chrome'
		}
	]*/
}
"use strict";
var testing_1 = require('@angular/core/testing');
var capitalize_pipe_1 = require('./capitalize.pipe');
describe('Pipe: CapitalizePipe', function () {
    var pipe;
    //setup
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({
        providers: [capitalize_pipe_1.CapitalizePipe]
    }); });
    beforeEach(testing_1.inject([capitalize_pipe_1.CapitalizePipe], function (p) {
        pipe = p;
    }));
    //specs
    it('should work with an empty string', function () {
        expect(pipe.transform('')).toEqual('');
    });
    it('should capitlize', function () {
        expect(pipe.transform('helloworld')).toBe('HELLOWORLD');
    });
    it('should throw with invalid values', function () {
        //    expect(pipe.transform(123)).toThrow('Requires a string as input');
        //    expect(pipe.transform()).toThrow('Requires a string as input');
        //    expect(pipe.transform()).toThrow('Requires a string as input');
        expect(function () { return pipe.transform(undefined); }).toThrow();
        // expect( () => pipe.transform()).toThrow('Error: Requires a string as input');
    });
});
//# sourceMappingURL=capitalize.pipe.spec.js.map
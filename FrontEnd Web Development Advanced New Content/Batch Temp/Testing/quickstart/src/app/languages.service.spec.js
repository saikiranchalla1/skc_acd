"use strict";
var testing_1 = require('@angular/core/testing');
var languages_service_1 = require('./languages.service');
describe('Service: LanguateService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [languages_service_1.LanguagesService]
        });
    });
    beforeEach(testing_1.inject([languages_service_1.LanguagesService], function (s) {
        service = s;
    }));
    it('should return available languages', function () {
        var languages = service.get();
        expect(languages.length).toBe(3);
        expect(languages).toContain('en');
    });
});
//# sourceMappingURL=languages.service.spec.js.map
"use strict";
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/http/testing');
var http_1 = require('@angular/http');
var languageshttp_service_1 = require('./languageshttp.service');
describe('MockBackend: LanguagesServiceHttp', function () {
    var mockBackend, service;
    //setup
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            providers: [
                languageshttp_service_1.LanguagesServiceHttp,
                { provide: http_1.XHRBackend, useClass: testing_2.MockBackend }
            ]
        });
    });
    beforeEach(testing_1.inject([languageshttp_service_1.LanguagesServiceHttp, http_1.XHRBackend], function (_service, _mockbackend) {
        service = _service;
        mockBackend = _mockbackend;
    }));
    //specs
    it('should return mocked response (async', testing_1.async(function () {
        var response = ["ru", "es"];
        mockBackend.connections.subscribe(function (connection) {
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: JSON.stringify(response) })));
        });
        service.get().subscribe(function (languages) {
            expect(languages.length).toBe(2);
            expect(languages).toContain('ru');
        });
    }));
});
//# sourceMappingURL=languageshttp.service.spec.js.map
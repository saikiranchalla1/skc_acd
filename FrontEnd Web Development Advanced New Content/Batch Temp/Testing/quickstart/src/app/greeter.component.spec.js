"use strict";
var testing_1 = require('@angular/core/testing');
var greeter_component_1 = require('./greeter.component');
var platform_browser_1 = require('@angular/platform-browser');
describe('Component : Greeter', function () {
    var fixture, greeter, element, de;
    //setup
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [greeter_component_1.Greeter]
        });
        fixture = testing_1.TestBed.createComponent(greeter_component_1.Greeter);
        greeter = fixture.componentInstance;
        element = fixture.nativeElement;
        de = fixture.debugElement;
    });
    //specs
    it('should render `Hello World!` (async)', testing_1.async(function () {
        greeter.name = 'World';
        //trigger change detection
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            expect(element.querySelector('h1').innerText).toBe('Hello World');
            expect(de.query(platform_browser_1.By.css('h1')).nativeElement.innerText).toBe('Hello World');
        });
    }));
    it('should render  `hello world` (fakeAsync/tick)', testing_1.fakeAsync(function () {
        greeter.name = 'World';
        fixture.detectChanges();
        //exeucte all pending async calls
        testing_1.tick();
        expect(element.querySelector('h1').innerText).toBe('Hello World');
    }));
});
//# sourceMappingURL=greeter.component.spec.js.map
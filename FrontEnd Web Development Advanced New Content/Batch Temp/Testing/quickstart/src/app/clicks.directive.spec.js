"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var clicks_directive_1 = require('./clicks.directive');
var testing_1 = require('@angular/core/testing');
var Container = (function () {
    function Container() {
        this.changes = new core_1.EventEmitter();
    }
    Container.prototype.changed = function (value) {
        this.changes.emit(value);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Container.prototype, "changes", void 0);
    Container = __decorate([
        core_1.Component({
            selector: 'container',
            template: "<div log-clicks (changes)=changed($event)></div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Container);
    return Container;
}());
exports.Container = Container;
describe('Directive: clicks', function () {
    var fixture, container, element;
    //setup
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [Container, clicks_directive_1.logClicks]
        });
        fixture = testing_1.TestBed.createComponent(Container);
        container = fixture.componentInstance;
        element = fixture.nativeElement;
    });
    it('should increment counter', function () {
        var div = element.querySelector('div');
        container.changes.subscribe(function (x) {
            expect(x).toBe(1);
        });
        div.click();
    });
});
//# sourceMappingURL=clicks.directive.spec.js.map
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
var logClicks = (function () {
    function logClicks() {
        this.counter = 0;
        this.changes = new core_1.EventEmitter();
    }
    logClicks.prototype.clicked = function (target) {
        console.log("Click on [" + target + ": " + ++this.counter);
        this.changes.emit(this.counter);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], logClicks.prototype, "changes", void 0);
    __decorate([
        core_1.HostListener('click', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], logClicks.prototype, "clicked", null);
    logClicks = __decorate([
        core_1.Directive({
            selector: "[log-clicks]"
        }), 
        __metadata('design:paramtypes', [])
    ], logClicks);
    return logClicks;
}());
exports.logClicks = logClicks;
//# sourceMappingURL=clicks.directive.js.map
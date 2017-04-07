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
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var testing_1 = require('@angular/core/testing');
var common_1 = require('@angular/common');
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        core_1.Component({
            selector: 'home',
            template: '<h1>Home</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
}());
exports.Home = Home;
exports.routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: '**', redirectTo: 'home' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(exports.routes)],
            declarations: [TestComponent, Home],
            bootstrap: [TestComponent],
            exports: [TestComponent],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
describe('Router tests', function () {
    var router;
    //setup
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [AppModule]
        });
    });
    beforeEach(testing_1.inject([router_1.Router], function (_router) {
        router = _router;
    }));
    it('default route redirects to home', testing_1.fakeAsync(function () {
        var fixture = testing_1.TestBed.createComponent(TestComponent);
        router.initialNavigation();
        fixture.detectChanges();
        //execute all pending aync calls
        testing_1.tick();
        expect(location.pathname.endsWith('/home')).toBeTruthy();
    }));
    it('can navigate to home', testing_1.fakeAsync(function () {
        var fixture = testing_1.TestBed.createComponent(TestComponent);
        router.navigate(['/home']);
        fixture.detectChanges();
        testing_1.tick();
        expect(location.pathname.endsWith('/home')).toBeTruthy();
    }));
    it('should redirect unexisting urls to home', testing_1.fakeAsync(function () {
        var fixture = testing_1.TestBed.createComponent(TestComponent);
        router.navigate(['/undefined/route']);
        fixture.detectChanges();
        testing_1.tick();
        expect(location.pathname.endsWith('/home')).toBeTruthy();
    }));
});
//# sourceMappingURL=router.spec.js.map
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, async, fakeAsync, tick, inject } from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';


@Component({
    selector: 'my-app',
    template: '<router-outlet></router-outlet>'
})
class TestComponent{

}

@Component({
    selector:'home',
    template:'<h1>Home</h1>'
})
export class Home{}

export const routes : Routes =[
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:Home},
    {path:'**', redirectTo:'home'}
];


@NgModule({
    imports: [ BrowserModule, RouterModule.forRoot(routes)],
    declarations: [TestComponent, Home],
    bootstrap: [TestComponent],
    exports:[TestComponent],
    providers: [ { provide : APP_BASE_HREF, useValue:'/'}]
})
export class AppModule{}


describe('Router tests', () => {
    let router:any;

    //setup
    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        })
    });

    beforeEach( inject([Router], (_router:any) => {
        router = _router;
    }));

    it('default route redirects to home', fakeAsync( () => {
        let fixture = TestBed.createComponent(TestComponent);
        router.initialNavigation();

        fixture.detectChanges();
        //execute all pending aync calls
        tick();
        expect(location.pathname.endsWith('/home')).toBeTruthy();
    }));

    it('can navigate to home', fakeAsync( () => {
        let fixture = TestBed.createComponent(TestComponent);

        router.navigate(['/home']);

        fixture.detectChanges();
        tick();

        expect(location.pathname.endsWith('/home')).toBeTruthy();
    }));

    it('should redirect unexisting urls to home', fakeAsync(() => {
        let fixture = TestBed.createComponent(TestComponent);

        router.navigate(['/undefined/route']);

        fixture.detectChanges();
        tick();

        expect(location.pathname.endsWith('/home')).toBeTruthy();
    }))
})
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { Greeter } from './greeter.component';
import { By } from '@angular/platform-browser';

describe('Component : Greeter', () => {
    let fixture:any, greeter:any,element:any, de:any;

    //setup
    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations:[Greeter]
        });

        fixture = TestBed.createComponent(Greeter);
        greeter  = fixture.componentInstance;
        element = fixture.nativeElement;
        de = fixture.debugElement;
    });

    //specs
    it('should render `Hello World!` (async)', async( () => {
        greeter.name = 'World';

        //trigger change detection
        fixture.detectChanges();
        fixture.whenStable().then( () => {
            expect(element.querySelector('h1').innerText).toBe('Hello World');
            expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Hello World');
        });
    }));

    it('should render  `hello world` (fakeAsync/tick)', fakeAsync( () => {
        greeter.name = 'World';
        fixture.detectChanges();
        //exeucte all pending async calls
        tick();
        expect(element.querySelector('h1').innerText).toBe('Hello World');

    }))
});
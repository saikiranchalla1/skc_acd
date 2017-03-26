import { Component, Output, EventEmitter } from '@angular/core';
import { logClicks } from './clicks.directive';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';


@Component({
    selector :'container',
    template : `<div log-clicks (changes)=changed($event)></div>`
})
export class Container{
    @Output() changes = new EventEmitter();

    changed(value:any){
        this.changes.emit(value);
    }
}


describe('Directive: clicks', () => {
    let fixture:any,container:any, element:any;


    //setup
    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations : [Container, logClicks]
        });

        fixture = TestBed.createComponent(Container);
        container = fixture.componentInstance;

        element = fixture.nativeElement;

    });

    it('should increment counter' , () => {
        let div = element.querySelector('div');

        container.changes.subscribe( (x:any) => {
            expect(x).toBe(1);
        });

        div.click();
    })
})
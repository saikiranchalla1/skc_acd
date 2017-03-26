import { inject, TestBed, async } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { HttpModule, XHRBackend, Response,ResponseOptions } from '@angular/http';
import { LanguagesServiceHttp } from './languageshttp.service';

describe('MockBackend: LanguagesServiceHttp', () => {
    let mockBackend:any, service:any;

    //setup

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports : [HttpModule],
            providers: [
                LanguagesServiceHttp,
                {provide :XHRBackend, useClass:MockBackend}
            ]
        })
    })


    beforeEach( inject([LanguagesServiceHttp, XHRBackend], (_service:any, _mockbackend:any) => {
        service = _service;
        mockBackend = _mockbackend;
    
    }));

    //specs
    it('should return mocked response (async', async( () => {
        let response = ["ru", "es"];
        mockBackend.connections.subscribe( (connection:any) => {
            connection.mockRespond(new Response(new ResponseOptions( { body : JSON.stringify(response)})));
        });

        service.get().subscribe( (languages:any) => {
            expect(languages.length).toBe(2);
            expect(languages).toContain('ru');
        })

    }))
});
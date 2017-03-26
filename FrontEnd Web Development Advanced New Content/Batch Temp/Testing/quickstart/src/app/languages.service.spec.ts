import { TestBed, inject } from '@angular/core/testing';
import { LanguagesService } from './languages.service';
describe('Service: LanguateService' ,() =>{
    let service:any;

    beforeEach( () => {
        TestBed.configureTestingModule( {
            providers : [LanguagesService]
        })
    });

    beforeEach(inject([LanguagesService], (s:any) => {
        service = s;
    }));

    it('should return available languages',  () => {
        let languages = service.get();

        expect(languages.length).toBe(3);
        expect(languages).toContain('en');

    })
} );
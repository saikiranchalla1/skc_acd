import {TestBed, inject} from '@angular/core/testing';
import {CapitalizePipe} from './capitalize.pipe';

describe('Pipe: CapitalizePipe', () => {
    let pipe:any;

    //setup
    beforeEach(() => TestBed.configureTestingModule({
        providers: [CapitalizePipe]
    }))

    beforeEach( inject( [CapitalizePipe], (p:any) => {
        pipe = p;
    }));

    //specs

    it('should work with an empty string', () => {
        expect(pipe.transform('')).toEqual('');
    })

   it('should capitlize', () => {
       expect(pipe.transform('helloworld')).toBe('HELLOWORLD');
   })

   it('should throw with invalid values',  () =>{
    //    expect(pipe.transform(123)).toThrow('Requires a string as input');
    //    expect(pipe.transform()).toThrow('Requires a string as input');
    //    expect(pipe.transform()).toThrow('Requires a string as input');
   
    expect( () => pipe.transform(undefined)).toThrow();
    // expect( () => pipe.transform()).toThrow('Error: Requires a string as input');
   })
})
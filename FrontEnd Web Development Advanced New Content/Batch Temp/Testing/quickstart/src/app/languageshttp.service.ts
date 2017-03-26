import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LanguagesServiceHttp {
    constructor(private http:Http){}

    get(){
        return this.http.get('api/languages.json')
            .map(response => response.json());
    }
}
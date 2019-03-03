import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 

@Injectable()
export class TwoDataService {

    API_URI: string = "/api/TwoService";

    constructor(private http: Http) {

    }

    getTwos(): Observable<any[]> {
        return this.http.get(this.API_URI)
            .map((response: Response) => response.json());
            //.catch((err) => Observable.throw(err)); 
    }
}

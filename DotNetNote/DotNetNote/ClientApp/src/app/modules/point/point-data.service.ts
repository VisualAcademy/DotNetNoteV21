import { Injectable } from '@angular/core';

import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { IPoint } from "./model";

@Injectable()
export class PointDataService {

    API_URI: string = "http://www.dotnetnote.com/api/PointService";

    constructor(private http: Http) {

    }

    getPoint(userId: number): Observable<IPoint> {
        return this.http.get(`${this.API_URI}/${userId}`)
            .map((response: Response) => {
                return <IPoint>response.json();
            })
            .catch((err) => Observable.throw(err));
    }
}

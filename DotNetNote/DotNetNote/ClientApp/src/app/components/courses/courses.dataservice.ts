import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class CoursesDataService {
    // Web API 경로
    API_URI: string = "https://api.github.com/"; 
    constructor(private http: Http) { }
    getGitHubApi(): Observable<any> {
        return this.http.get(this.API_URI).map((response: Response) => {
            return response.json(); 
        }).catch((err) => Observable.throw(err));
    }
}

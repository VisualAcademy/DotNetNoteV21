/// <summary>
/// 데이터서비스는 HTTP와 관련된 기능만 담당, 재사용 가능 
/// </summary>

import { Injectable } from '@angular/core';

// app.module.ts에 HttpModule 등록
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do'; // 추가 

import { IThree } from './IThree';

@Injectable()
export class ThreeDataService {

    API_URI: string = "/api/ThreeService";

    // DI
    constructor(private http: Http) { }

    // GET
    getThrees(): Observable<IThree[]> {
        return this.http.get(this.API_URI)
            .map((response: Response) => {
                let threes = <IThree[]>response.json(); // <Three[]> 추가
                console.log(`${threes.length}개의 데이터 가져오기`); // 추가
                return threes; 
            }).catch((err) => Observable.throw(err)); 
    }

    // POST
    addThree(three: IThree): Observable<IThree> {
        return this.http.post(this.API_URI, three)
            .map((response: Response) => {
                const r = response.json();
                return r; 
            }).catch(err => Observable.throw(err));
    }

    // 추가
    getThree(id: number): Observable<IThree> {
        return this.http.get(`this.API_URI/${id}`)
            .map((response: Response) => {
                let threes = <IThree>response.json(); // <Three[]> 추가
                return threes;
            }).catch((err) => Observable.throw(err));
    }

}

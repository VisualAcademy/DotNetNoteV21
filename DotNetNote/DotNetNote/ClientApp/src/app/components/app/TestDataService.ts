import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; // 에러 잡기 

import { IOne } from './IOne';


@Injectable()
export class TestDataService {

    API_URI: string = "/api/OneService"; 

    constructor(private http: Http) {

    }
    
    getOnes(): Observable<IOne[]> {
        return this.http.get(this.API_URI).map((response: Response) => {
            let ones = response.json(); 

            // 중간 업데이트 코드 가능

            return ones; 
        }).catch(this.handleError); 
    }

    getOne(id: number): Observable<IOne> {
        return this.http.get(this.API_URI + "/" + id).map((res: Response) => res.json()).catch(this.handleError); 
    }
    

    // 에러 처리 공통 메서드 
    private handleError(error: any) {
        console.error("서버측 에러 발생: ", error);
        if (error instanceof Response) {
            let errMessage: any;
            try {
                errMessage = error.json().error;
            }
            catch (err) {
                errMessage = error.statusText; 
            }
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || "서버 에러..."); 
    }


    // 데이터 저장 
    postOne(one: IOne) : Observable<IOne> {
        return this.http.post(this.API_URI, one).map((response: Response) => {
            const data = response.json();
            return data; 
        }).catch(err => Observable.throw(err)); 
    }



}

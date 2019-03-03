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
import 'rxjs/add/operator/delay'; // 추가

import { IFive, IPagedViewModel } from './model'; // 모델 클래스 및 인터페이스 

import { NgForm } from '@angular/forms'; // ngForm 디렉티브로 지정된 값 받기

@Injectable()
export class FiveDataService {
    // Web API 경로
    API_URI: string = "/api/FiveService";

    // DI
    constructor(private http: Http) { }

    // GET: GetAll() 
    getFives(): Observable<IFive[]> {
        return this.http.get(this.API_URI) // .delay(1000) // 1초 딜레이 추가
            .map((response: Response) => {
                let fives = <IFive[]>response.json(); // <> 구문으로 캐스팅 표현
                return fives;
            })
            .catch(this.handleError);
    }

    // GetAllWithPaging: 페이징 처리
    getFivesWithPaging(newPage: number, pageSize: number): Observable<IPagedViewModel<IFive[]>> {
        return this.http.get(`${this.API_URI}/page/${newPage}/${pageSize}`)
            .map((response: Response) => {
                var totalRecordCount: any = response.headers.get("X-TotalRecordCount");
                let fives = <IFive[]>response.json();
                return {
                    totalRecordCount: totalRecordCount,
                    records: fives
                };
            })
            .catch(this.handleError);
    }

    // POST: Add() 
    addFive(four: IFive): Observable<IFive> {
        return this.http.post(this.API_URI, four)
            .map((response: Response) => {
                const r = response.json() as IFive; // as 구문으로 캐스팅 표현
                console.log("입력 처리 완료: " + response.status); // [추가] => 201 반환 확인 
                return r;
            })
            .catch(this.handleError);
    }

    // PUT: Update()
    updateFive(id: number, five: IFive): Observable<IFive> {
        return this.http.put(`${this.API_URI}/${id}`, five)
            .map((response: Response) => {
                //const r = response.json() as IFive;
                //console.log("데이터 수정 완료");
                //return r;
                return five; // No Content
            })
            .catch(this.handleError);
    }

    // GET: GetById()
    getFive(id: number): Observable<IFive> {
        return this.http.get(`${this.API_URI}/${id}`)
            .map((response: Response) => {
                let Fours = <IFive>response.json(); // <IFour[]>
                return Fours;
            })
            .catch(this.handleError);
    }

    // DELETE
    deleteFive(id: number): Observable<boolean> {
        return this.http.delete(`${this.API_URI}/${id}`)
            .map((response: Response) => {
                return true;
            })
            .catch(this.handleError);
    }

    // 예외 처리 출력 공통 메서드
    private handleError(error: any) {
        console.log('서버 에러 발생:', error);
        if (error instanceof Response) {
            return Observable.throw(error);
        }
        return Observable.throw(error || 'Web API에서 에러 발생');
    }
}

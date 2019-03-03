/// <summary>
/// 데이터서비스는 HTTP와 관련된 기능만 담당, 재사용 가능 
/// </summary>
import { Injectable } from '@angular/core';

// app.module.ts에 HttpModule 등록
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { IQuestion, IPagedViewModel } from './model';

@Injectable()
export class QuestionDataService {
    // Web API 경로
    API_URI: string = "/api/QuestionService";

    // DI
    constructor(private http: Http) {
    }

    // 예외 처리 출력 공통 메서드
    private handleError(error: any) {
        console.log('서버 에러 발생:', error);
        if (error instanceof Response) {
            return Observable.throw(error);
        }
        return Observable.throw(error || 'Web API에서 에러 발생');
    }

    // GET: GetAll() 
    getAll(): Observable<IQuestion[]> {
        return this.http.get(this.API_URI) // .delay(1000) // 1초 딜레이 추가
            .map((response: Response) => {
                let models = <IQuestion[]>response.json(); // <> 구문으로 캐스팅 표현
                console.log("getAll(): 데이터를 가져왔습니다.");
                return models;
            })
            .catch(this.handleError);
    }

    // POST: Add() 
    add(model: IQuestion): Observable<IQuestion> {
        return this.http.post(this.API_URI, model)
            .map((response: Response) => {
                const r = response.json() as IQuestion; // as 구문으로 캐스팅 표현
                console.log("입력 처리 완료: " + response.status); // [추가] => 201 반환 확인 
                return r;
            })
            .catch(this.handleError);
    }

    // 페이징 GET: GetAllWithPaging(): 페이징 처리
    getAllWithPaging(newPage: number, pageSize: number): Observable<IPagedViewModel<Array<IQuestion>>> { // Array<T> 형태 사용해 봄, T[]과 동일
        return this.http.get(`${this.API_URI}/page/${newPage}/${pageSize}`)
            .map((response: Response) => {
                // Web API에서 헤더에 실어서 넘어온 총 레코드 수 가져오기 
                const totalRecordCount = +response.headers.get("X-TotalRecordCount");
                //let models = <IQuestion[]>response.json();
                let models = response.json() as Array<IQuestion>;
                return {
                    totalRecordCount: totalRecordCount,
                    records: models
                };
            })
            .catch(this.handleError);
    }


    // 수정 PUT: Update()
    // update(model: IQuestion): Observable < IQuestion > {
    update(id: number, model: IQuestion): Observable<IQuestion> {
        return this.http.put(`${this.API_URI}/${id}`, model)
            .map((response: Response) => {
                //const r = response.json() as IQuestion;
                //console.log("데이터 수정 완료");
                //return r;
                return model; // No Content
            })
            .catch(this.handleError);
    }

    // 상세 GET: GetById()
    getById(id: number): Observable<IQuestion> {
        return this.http.get(`${this.API_URI}/${id}`)
            .map((response: Response) => {
                let models = <IQuestion>response.json(); 
                return models;
            })
            .catch(this.handleError);
    }

    // 삭제 DELETE
    delete(id: number): Observable<boolean> {
        return this.http.delete(`${this.API_URI}/${id}`)
            .map((response: Response) => {
                // return response.json().status; // <- 참고용 코드 
                return true; // 삭제 완료
            })
            .catch(this.handleError);
    }
}

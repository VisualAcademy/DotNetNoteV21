//[9] 데이터 서비스
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

// Reactive Extension 관련 공식 코드: 일단, 아래 코드는 공식^^
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

// 뷰 모델 추가
import { IIdea } from './IIdea';

@Injectable()
export class IdeaDataService {

    // Web API 경로
    API_URI: string = "/api/IdeaService";

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

    // 출력(cRud)
    // GET: GetAll() 
    getAll(): Observable<IIdea[]> {
        return this.http.get(this.API_URI) // .delay(1000) // 1초 딜레이 추가
            .map((response: Response) => {
                let models = <IIdea[]>response.json(); // <> 구문으로 캐스팅 표현
                console.log("[idea.data.service.ts] getAll(): 데이터를 가져왔습니다.");
                return models;
            }).catch(this.handleError);
    }

    // 출력(단순형)
    //getIdeas() {        
    //    return this._http.get("/api/IdeaService").map((response: Response) => response.json());
    //}

    // 입력(Crud)
    // POST: Add() 
    add(model: IIdea): Observable<IIdea> {
        return this.http.post(this.API_URI, model)
            .map((response: Response) => {
                const r = response.json() as IIdea; // as 구문으로 캐스팅 표현

                // 입력(POST) 후의 가장 이상적인 반환 값인 201 Created 상태값 반환
                console.log("[idea.data.service.ts] 입력 처리 완료: " + response.status);

                return r;
            })
            .catch(this.handleError);
    }
}


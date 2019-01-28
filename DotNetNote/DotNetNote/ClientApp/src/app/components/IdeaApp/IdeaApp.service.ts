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
import { IdeaModel } from "./IdeaModel";

//[7] 데이터 서비스 클래스
@Injectable()
export class IdeaAppService {
    // Web API 경로
    public API_URI: string = "/api/IdeaServices"; 

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
    getAll(): Observable<IdeaModel[]> {
        return this.http.get(this.API_URI)
            .map((response: Response) => {
                let models = <IdeaModel[]>response.json(); 
                console.log("IdeaApp: getAll(): 데이터를 가져왔습니다.");
                return models; 
            }).catch(this.handleError);
    }

    // 입력(Crud)
    // POST: Add()
    add(model: IdeaModel): Observable<IdeaModel> {
        return this.http.post(this.API_URI, model)
            .map((res: Response) => {
                const r = res.json() as IdeaModel;
                console.log("IdeaApp: add(): 데이터가 입력되었습니다.");
                return r; 
            })
            .catch(this.handleError);
    }
}

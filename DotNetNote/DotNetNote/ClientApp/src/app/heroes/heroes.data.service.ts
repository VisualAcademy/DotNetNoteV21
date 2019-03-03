/// <summary>
/// 데이터서비스는 HTTP와 관련된 기능만 담당, 재사용 가능 
/// </summary>

//[!] Injectable 데코레이터 
import { Injectable } from '@angular/core';

//[!] heroes.module.ts에 HttpModule 등록 확인
import { Http, Headers, Response, RequestOptions } from '@angular/http';

//[!] Reactive Extension 관련 공식 코드: 사용하지 않는 항목은 제거 가능
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

//[!] 모델 클래스, 인터페이스 등 참조
import { IHero, HeroModel, IPagedViewModel } from './model';

@Injectable()
export class HeroesDataService {
    //[1] Web API 경로
    private API_URI: string = "/api/heroes";

    //[2] DI: 종속성(의존성) 주입
    constructor(private http: Http) {
    }

    /**
     *[3] 예외 처리 출력 공통 메서드
     * @param error
     */
    private handleError(error: any) {
        console.log('서버 에러 발생:', error);
        if (error instanceof Response) {
            return Observable.throw(error);
        }
        return Observable.throw(error || 'Web API에서 에러 발생');
    }

    //[4] 출력(cRud)
    // GET: GetAll() 
    getAll(): Observable<IHero[]> {
        return this.http.get(this.API_URI) // .delay(1000) // 1초 딜레이 추가
            .map((response: Response) => {
                let models = <IHero[]>response.json(); // <> 구문으로 캐스팅 표현
                console.log("[heroes.data.service.ts] getAll(): 데이터를 가져왔습니다.");
                return models; 
            }).catch(this.handleError);
    }

    //[5] 입력(Crud)
    // POST: Add() 
    add(model: IHero): Observable<IHero> {
        return this.http.post(this.API_URI, model)
            .map((response: Response) => {
                const r = response.json() as IHero; // as 구문으로 캐스팅 표현

                // 입력(POST) 후의 가장 이상적인 반환 값인 201 Created 상태값 반환
                console.log("[heroes.data.service.ts] 입력 처리 완료: " + response.status); 

                return r; 
            })
            .catch(this.handleError);
    }

    //[6] 상세(cRud)
    // GET: GetById()
    getById(id: number): Observable<IHero> {
        const url = `${this.API_URI}/${id}`;
        return this.http.get(url)
            .map((res: Response) => {
                let model = <IHero>res.json(); 
                //console.log("[heroes.data.service.ts] 상세 데이터 읽기 완료: " + res.status);
                return model; 
            })
            .do(model => console.log("[heroes.data.service.ts] 상세 데이터 읽기 완료: " + JSON.stringify(model)))
            .catch(this.handleError);
    }

    //[7] 수정(crUd)
    // PUT: Update()
    update(id: number, model: IHero): Observable<IHero> {
        return this.http.put(`${this.API_URI}/${id}`, model)
            .map((response: Response) => {
                //let model = <IHero>response.json(); 
                //return model; 
                console.log("[heroes.data.service.ts] 수정 완료: " + response.status);
                model.id = id; 
                return model; 
            })
            .catch(this.handleError);
    }

    //[8] 삭제(cruD)
    // DELETE: Remove()
    delete(id: number): Observable<boolean> {
        return this.http.delete(`${this.API_URI}/${id}`)
            .map((response: Response) => {
                console.log("[heroes.data.service.ts] 삭제 완료: " + response.status);
                return true; // 삭제 완료
            })
            .catch(this.handleError);
    }

    //[9] 페이징(crudP)
    // GET: GetAllWithPaging()
    getAllWithPaging(newPage: number, pageSize: number):
        Observable<IPagedViewModel<Array<IHero>>> {
        return this.http.get(`${this.API_URI}/page/${newPage}/${pageSize}`)
            .map((response: Response) => {
                // Web API에서 헤더에 실어서 넘어온 총 레코드 수 가져오기
                let totalRecordCount = parseInt(response.headers.get("X-TotalRecordCount"));
                let models = response.json() as IHero[];

                console.log("[heroes.data.service.ts] 페이징 완료");

                return {
                    totalRecordCount: totalRecordCount,
                    records: models
                }; 
            })
            .catch(this.handleError);
    }

    //[10] 상세(cRud)
    // GET: GetByName(): 이미 저장된 이름인지 확인
    getByName(name: string): Observable<IHero> {
        const url = `${this.API_URI}/${name}`;
        return this.http.get(url)
            .map((res: Response) => {
                let model = <IHero>res.json();
                return model;
            })
            .do(model => console.log("[heroes.data.service.ts] getByName 상세 데이터 읽기 완료: " + JSON.stringify(model)))
            .catch(this.handleError);
    }
}

import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

// Reactive Extension 관련 공식 코드: 일단, 아래 코드는 공식^^
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { ISignDto } from '../models/sign/ISignDto';
import { ISignBase } from '../models/sign/ISignBase';
import { Request } from '@angular/http/src/static_request';

@Injectable()
export class SignService {
    // Web API 경로
    private API_URL: string = "/api/SignServices";

    // 로그인 사용자의 이메일 값 반환
    get email() {
        return localStorage.getItem("email");
    }

    // 인증되었으면 true 반환
    get isAuthenticated() {
        return !!localStorage.getItem("token");
    }

    // 토큰 문자열 반환
    get token() {
        return localStorage.getItem("token");
    }

    // DI: 종속성(의존성) 주입
    constructor(private http: Http, private router: Router) {
    }

    /**
     *[0] 예외 처리 출력 공통 메서드
     * @param error
     */
    private handleError(error: any) {
        console.log('서버 에러 발생:', error);
        if (error instanceof Response) {
            return Observable.throw(error);
        }
        return Observable.throw(error || 'Web API에서 에러 발생');
    }

    /**
     * 로그인
     * @param model ISignBase 인터페이스 
     */
    login(model: ISignBase): Observable<boolean> {
        return this.http.post(this.API_URL + "/Login", model).map((response: Response) => {
            let res = <ISignDto>response.json();

            if (!res.token) {
                return false;
            }

            // 토큰 저장
            this.saveToken(res);

            return true; 
        }).catch(this.handleError);
    }
    //login(model: ISignBase): boolean {
    //    this.http.post(this.API_URL + "/Login", model).subscribe(response => {
    //        let res = <ISignDto>response.json();

    //        if (!res.token) {
    //            return false;
    //        }

    //        //// 서버에서 발행된 토큰을 localStorage에 저장
    //        //localStorage.setItem("token", res.token);
    //        //localStorage.setItem("email", res.email);
    //        // 토큰 저장
    //        this.saveToken(res);

    //        // 로그인 되었으면 Home 페이지로 이동
    //        //this.router.navigate(['/home']);
    //    });
    //    return true;
    //}


    /**
     * 회원가입 
     * @param model ISignBase 인터페이스 
     */
    register(model: ISignBase) {
        this.http.post(this.API_URL + "/Register", model).subscribe(response => {
            let res = response.json() as ISignDto;

            if (!res.token) {
                return;
            }

            // alert(res.signId);

            // 토큰 저장
            this.saveToken(res);

            // 회원 가입 후 로그인 되었으면 Home 페이지로 이동
            this.router.navigate(['/home']);
        });
    }

    /**
     * 토큰 저장
     * @param res
     */
    saveToken(res: ISignDto) {
        // 서버에서 발행된 토큰을 localStorage에 저장
        localStorage.setItem("token", res.token);
        localStorage.setItem("email", res.email);
    }

    /**
     * 로그아웃
     */
    logout() {
        // 서버에서 발행된 토큰을 제거
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    }

    /**
     * 회원 정보
     */
    details() {
        // 헤더에 토큰을 저장
        let header = new Headers({ "Authorization": "Bearer " + this.token });
        let requestOptions = new RequestOptions({ headers: header });
        // 서버에 요청
        return this.http.get(this.API_URL + "/Details", requestOptions)
            .map(response => {
                return response.json();
            })
            .catch(this.handleError);
    }
}

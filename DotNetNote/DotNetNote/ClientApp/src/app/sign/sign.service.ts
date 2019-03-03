import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

// Reactive Extension ���� ���� �ڵ�: �ϴ�, �Ʒ� �ڵ�� ����^^
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
    // Web API ���
    private API_URL: string = "/api/SignServices";

    // �α��� ������� �̸��� �� ��ȯ
    get email() {
        return localStorage.getItem("email");
    }

    // �����Ǿ����� true ��ȯ
    get isAuthenticated() {
        return !!localStorage.getItem("token");
    }

    // ��ū ���ڿ� ��ȯ
    get token() {
        return localStorage.getItem("token");
    }

    // DI: ���Ӽ�(������) ����
    constructor(private http: Http, private router: Router) {
    }

    /**
     *[0] ���� ó�� ��� ���� �޼���
     * @param error
     */
    private handleError(error: any) {
        console.log('���� ���� �߻�:', error);
        if (error instanceof Response) {
            return Observable.throw(error);
        }
        return Observable.throw(error || 'Web API���� ���� �߻�');
    }

    /**
     * �α���
     * @param model ISignBase �������̽� 
     */
    login(model: ISignBase): Observable<boolean> {
        return this.http.post(this.API_URL + "/Login", model).map((response: Response) => {
            let res = <ISignDto>response.json();

            if (!res.token) {
                return false;
            }

            // ��ū ����
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

    //        //// �������� ����� ��ū�� localStorage�� ����
    //        //localStorage.setItem("token", res.token);
    //        //localStorage.setItem("email", res.email);
    //        // ��ū ����
    //        this.saveToken(res);

    //        // �α��� �Ǿ����� Home �������� �̵�
    //        //this.router.navigate(['/home']);
    //    });
    //    return true;
    //}


    /**
     * ȸ������ 
     * @param model ISignBase �������̽� 
     */
    register(model: ISignBase) {
        this.http.post(this.API_URL + "/Register", model).subscribe(response => {
            let res = response.json() as ISignDto;

            if (!res.token) {
                return;
            }

            // alert(res.signId);

            // ��ū ����
            this.saveToken(res);

            // ȸ�� ���� �� �α��� �Ǿ����� Home �������� �̵�
            this.router.navigate(['/home']);
        });
    }

    /**
     * ��ū ����
     * @param res
     */
    saveToken(res: ISignDto) {
        // �������� ����� ��ū�� localStorage�� ����
        localStorage.setItem("token", res.token);
        localStorage.setItem("email", res.email);
    }

    /**
     * �α׾ƿ�
     */
    logout() {
        // �������� ����� ��ū�� ����
        localStorage.removeItem("token");
        localStorage.removeItem("email");
    }

    /**
     * ȸ�� ����
     */
    details() {
        // ����� ��ū�� ����
        let header = new Headers({ "Authorization": "Bearer " + this.token });
        let requestOptions = new RequestOptions({ headers: header });
        // ������ ��û
        return this.http.get(this.API_URL + "/Details", requestOptions)
            .map(response => {
                return response.json();
            })
            .catch(this.handleError);
    }
}

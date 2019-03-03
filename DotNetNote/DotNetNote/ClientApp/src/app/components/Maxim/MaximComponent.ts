import { Component } from '@angular/core';
//[1] 심플 버전
//import { Http, Headers } from '@angular/http';
//[2] 
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Component({
    selector: "maxim",
    templateUrl: './MaximComponent.html'
})
export class MaximComponent {

    title: string; 

    name: string; 

    id: number; 

    private API_URI: string = "/api/MaximService";
    maxims = []; 
    constructor(private _http: Http) {
        //[1] 데이터 조회
        _http.get(this.API_URI).subscribe(result => {
            this.maxims = result.json();
        });
    }

    //[2] 데이터 저장 
    submit(val: any) {
        var headers = new Headers();
        //headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        this._http.post(
            this.API_URI, JSON.stringify(val), { headers: headers })
            .subscribe(result => {
                // 저장 후 넘어온 값이 있다면 출력
                if (result) {
                    //this.maxims.push(val); // = result.json();
                    //this.maxims.push(result.json());
                    // 또는 라우터로 리스트 페이지로 이동 
                    //this.router.navigate(["/Maxim"]);
                }
                else {
                    console.log("에러");
                }    
        }); 
    }

    btnClick() {
        alert(this.id);
        (<HTMLInputElement>document.getElementById("txt")).value = "테스트";
    }

    btnGetById() {
        //[1] 데이터 조회
        this._http.get(this.API_URI + "/" + this.id).subscribe(result => {
            this.maxims = result.json();
        });
    }
}

import { Component } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { TestDataService } from './TestDataService'; // 데이터 서비스 

import { IOne } from './IOne'; // 모델 인터페이스 

import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'test',
    templateUrl: './TestComponent.html'
})
export class TestComponent {

    public note: string = ""; 

    ones: IOne[] = [];

    constructor(private route: ActivatedRoute,  private http: Http, private ds: TestDataService
        , private router: Router) {

        this.getOnes(); 

    }

    //[2] 또 다른 모양 : Threes에서 사용할까? 
    getOnes() {
        this.ds.getOnes().subscribe((ones: IOne[]) => {
            this.ones = ones;     // 성공 콜백
        }, (err:any) => console.log(err), () => console.log('가져오기 성공'));
    }


    //btnSave_Click(frmValue) {
    //    var headers = new Headers();
    //    headers.append("Content-Type", 'application/json');
    //    this.http.post("/api/OneService"
    //        , JSON.stringify(frmValue)
    //        , { headers: headers }
    //    ).subscribe(result => {
    //        this.ones.push(result.json());
    //    });
    //}
    btnSave_Click(frmValue: any) {
        //var headers = new Headers();
        //headers.append("Content-Type", 'application/json');
        //this.http.post("/api/OneService"
        //    , JSON.stringify(frmValue)
        //    , { headers: headers }
        //).subscribe(result => {
        //    this.ones.push(result.json());
        //    });


        this.ds.postOne(frmValue as IOne).subscribe((one: IOne) => {
            if (one) {
                this.ones.push(one);
                //this.router.navigate(['/Test']);
            }
        }); 

    }
}

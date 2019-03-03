import { Component } from '@angular/core';
import { ThreeDataService } from './ThreeDataService';
import { IThree } from './IThree';

@Component({
    selector: 'three',
    templateUrl: './ThreeComponent.html'
})
export class ThreeComponent {

    public note: string = ""; 

    threes: IThree[] = [];
    errorMsg: any; 

    constructor(private ds: ThreeDataService) {
        this.getThrees();
    }

    //getThrees() {
    //    this.ds.getThrees().subscribe((threes: IThree[]) => {
    //        this.threes = threes;
    //    });
    //}

    getThrees() {
        this.ds.getThrees().subscribe((threes: IThree[]) => {
            this.threes = threes;
        }, error => this.errorMsg = <any>error); // 에러처리 추가 
    }

    //btnSave_Click(frmValue) {
    //    var headers = new Headers();
    //    headers.append("Content-Type", 'application/json');
    //    this.http.post("/api/ThreeService"
    //        , JSON.stringify(frmValue)
    //        , { headers: headers }
    //    ).subscribe(result => {
    //        this.threes.push(result.json());
    //    });
    //}
    btnSave_Click(frmValue: any) {
        this.ds.addThree(frmValue as IThree)
            .subscribe((three: IThree) => {
                if (three) {
                    this.threes.push(three); 
                }
        });
    }
}

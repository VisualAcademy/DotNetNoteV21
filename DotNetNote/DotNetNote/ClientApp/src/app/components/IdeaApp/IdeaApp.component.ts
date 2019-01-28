import { Component, OnInit } from '@angular/core';

import { IdeaModel } from './IdeaModel';
import { IdeaAppService } from './IdeaApp.service';

@Component({
    selector: "IdeaApp",
    templateUrl: "./IdeaApp.component.html"
})
export class IdeaAppComponent implements OnInit {

    public title: string = "아이디어 관리자 2018"; 

    public ideas: IdeaModel[] = []; 

    public note: string = ""; 

    constructor(private ds: IdeaAppService) {

    }

    ngOnInit() {
        this.ds.getAll().subscribe(
            (models: IdeaModel[]) => { this.ideas = models },
            (error: any) => { console.log(`가져오기 에러: ${error}`) },
            () => { console.log("데이터 가져오기 완료"); }
        ); 
    }

    btnSave_Click(val: any) {
        this.ds.add(val as IdeaModel).subscribe(
            // 성공 콜백
            (model: IdeaModel) => {
                if (model) {
                    this.ideas.push(model); 
                    console.log("저장 완료: " + JSON.stringify(model));
                }
                else {
                    console.log("저장되지 않음");
                }
            },
            // 에러 콜백
            (err: any) => {
                console.log(`저장 에러: ${err}`);
            },
            // 정리 콜백
            () => {
                console.log("저장 완료");
            }
        ); 
    }

    btnSubmit_Click(frm) {
        this.ds.add(frm as IdeaModel).subscribe(() => {

        });


    }
}

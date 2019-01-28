//[10] 컴포넌트
import { Component, OnInit } from '@angular/core';
import { IIdea } from './model';
import { IdeasDataService } from './ideas.data.service';

@Component({
    selector: "idea",
    templateUrl: './ideas.component.html'
})
export class IdeasComponent implements OnInit {

    public note: string = ""; 

    public ideas: IIdea[] = [];

    constructor(private ds: IdeasDataService) {
    }

    ngOnInit() {
        this.ds.getAll().subscribe(
            (models: IIdea[]) => { this.ideas = models; },
            (error: any) => { console.log(error); },
            () => { console.log("아이디어 관리자 리스트 출력 완료..."); }
        );
    }

    btnSave_Click(val: any) {

        this.ds.add(val as IIdea).subscribe(
            (model: IIdea) => {
                if (model) {
                    console.log("저장 완료... : " + JSON.stringify(model));
                    this.ideas.push(model);
                }
                else {
                    console.log("저장되지 않음...");
                }
            },  // 성공 콜백
            (err: any) => {
                console.log(`저장 에러 발생: ${err}`);
            },  // 에러 콜백
            () => {

            }   // 마무리 콜백
        );
    }
}

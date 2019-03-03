import { Component, OnInit } from '@angular/core';
import { QuestionDataService } from './dataservice';
import { IQuestion, QuestionModel } from './model';
import { Router } from '@angular/router';

@Component({
    selector: 'question-write',
    templateUrl: './write.component.html'
})
export class QuestionWriteComponent implements OnInit {
    // 모델
    model: QuestionModel = new QuestionModel(0, "");

    // 동의 체크박스 
    isAgree: boolean = false;

    constructor(private ds: QuestionDataService, private router: Router) { }

    ngOnInit() { }

    // 저장(전송) 버튼 클릭 
    btnSave_Click(frmValue) {
        if (this.isAgree === true) {
            this.ds.add(frmValue as IQuestion)
                .subscribe(
                // 성공 콜백
                (model: IQuestion) => {
                    if (model) {
                        console.log("저장 완료..." + JSON.stringify(model));
                        // 저장 후 리스트 페이지로 이동
                        // this.router.navigate(['/four']);
                    }
                    else {
                        console.log("저장되지 않음...");
                    }
                },
                // 에러 콜백
                (err: any) => console.log(err),
                // 마무리 콜백 
                () => { this.router.navigate(['/question']); }
                );
        }
        else {
            console.log("체크박스에 체크해야만 저장이 됩니다.");
        }
    }
}

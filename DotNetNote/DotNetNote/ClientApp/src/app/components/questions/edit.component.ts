import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionDataService } from './dataservice';
import { IQuestion, QuestionModel } from './model';

@Component({
    selector: 'question-edit',
    templateUrl: './edit.component.html'
})
export class QuestionEditComponent implements OnInit {
    id: number;
    model: IQuestion = { id: 0, title: '' }; //[!] 기본값으로 초기화

    constructor(private route: ActivatedRoute,
        private ds: QuestionDataService, private router: Router) {
    }

    ngOnInit() {
        let id = +this.route.snapshot.params["id"]; // id 매개변수 받기
        this.id = id;
        this.getData(id);
    }

    goList() {
        this.router.navigate(['/question']);
    }

    // 데이터 상세 보기 
    getData(id: number): void {
        this.ds.getById(id).subscribe(
            (model: IQuestion) => {
                const tmpModel = JSON.stringify(model);
                this.model = JSON.parse(tmpModel);
            },
            error => console.log(error)
        );
    }

    btnEdit_Click(frmValue) {
        this.ds.update(this.id, frmValue as IQuestion)
            .subscribe((model: IQuestion) => {      // 성공 핸들러 
                if (model) {
                    console.log("수정 완료..." + JSON.stringify(model));
                }
                else {
                    console.log("수정되지 않음...");
                }
            },
            (err: any) => console.log(err),         // 에러 핸들러
            () => { this.goDetail(); }              // 마무리 핸들러 
            );
    }

    // 상세보기 페이지로 이동
    goDetail() {
        this.router.navigate(['/questiondetail', this.id]);
    }
}

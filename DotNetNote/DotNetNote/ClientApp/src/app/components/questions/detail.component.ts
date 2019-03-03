import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IQuestion } from './model';
import { QuestionDataService } from './dataservice';

@Component({
    selector: 'question-detail',
    templateUrl: './detail.component.html'
})
export class QuestionDetailComponent implements OnInit {
    id: number;
    model: IQuestion = { id: 0, title: '' }; // 기본값으로 초기화
    constructor(private route: ActivatedRoute,
        private router: Router, private ds: QuestionDataService) { }
    ngOnInit() {
        let id = +this.route.snapshot.params["id"]; // id 매개변수 받기
        this.id = id;
        this.getById(id);
    }
    // 데이터 상세 보기 
    getById(id: number): void {
        this.ds.getById(id).subscribe((model: IQuestion) => {
                const tmp = JSON.stringify(model);
                this.model = JSON.parse(tmp);
            }, error => console.log(error)
        );
    }

    // 리스트 페이지로 이동
    goList() {
        this.router.navigate(['/question']);
    }
    // 수정 페이지로 이동
    goModify() {
        this.router.navigate(['/questionedit', this.id]);
    }
    // 삭제 페이지로 이동
    goDelete() {
        this.router.navigate(['/questiondelete', this.id]);
    }
}

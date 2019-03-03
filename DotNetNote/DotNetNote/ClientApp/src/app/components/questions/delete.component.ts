//[!] 템플릿 기반 폼 사용 연습
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionDataService } from './dataservice';

@Component({
    selector: "question-delete",
    templateUrl: './delete.component.html'
})
export class QuestionDeleteComponent implements OnInit {
    password: string;
    id: number;
    constructor(private route: ActivatedRoute,
        private router: Router, private ds: QuestionDataService) { }
    ngOnInit() {
        this.id = this.route.snapshot.params["id"];
    }

    // 삭제 버튼 클릭 
    btnSubmit_Click(password: string) {
        //console.log(this.id);
        //console.log(password);

        // 삭제 처리 
        this.ds.delete(this.id).subscribe(r => console.log(r)); // 삭제

        this.router.navigate(['/question']); // 리스트 페이지로 이동 
    }

    goDetail() {
        this.router.navigate(['/questiondetail', this.id]);
    }
}

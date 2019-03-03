import { Component, OnInit } from '@angular/core';
import { FiveDataService } from './dataservice';
import { IFive } from './model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'fivedetail',
    templateUrl: './detail.component.html'
})
export class FiveDetailComponent implements OnInit {
    id: number;
    model: IFive = { id: 0, note: '' }; // 기본값으로 초기화
    constructor(private route: ActivatedRoute,
        private router: Router, private ds: FiveDataService) { }
    ngOnInit() {
        let id = +this.route.snapshot.params["id"]; // id 매개변수 받기
        this.id = id;
        this.getData(id);
    }
    goList() {
        this.router.navigate(['/five']);
    }
    // 데이터 상세 보기 
    getData(id: number): void {
        this.ds.getFive(id).subscribe(
            (five: IFive) => {
                const tmp = JSON.stringify(five);
                this.model = JSON.parse(tmp);
            },
            error => console.log(error)
        );
    }
    // 수정 페이지로 이동
    goModify() {
        this.router.navigate(['/fiveedit', this.id]);
    }
    // 삭제 페이지로 이동
    goDelete() {
        this.router.navigate(['/fivedelete', this.id]);
    }
}

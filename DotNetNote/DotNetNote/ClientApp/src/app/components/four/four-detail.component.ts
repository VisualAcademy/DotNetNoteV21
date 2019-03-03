import { Component, OnInit } from '@angular/core';
import { FourDataService } from './four.dataservice';
import { IFour } from './four.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'four-detail',
    templateUrl: './four-detail.component.html'
})
export class FourDetailComponent implements OnInit {
    id: number; 
    four: IFour = { id: 0, note: '' }; // 기본값으로 초기화
    constructor(private route: ActivatedRoute,
        private router: Router, private ds: FourDataService) { }
    ngOnInit() {
        let id = +this.route.snapshot.params["id"]; // id 매개변수 받기
        this.id = id; 
        this.getFour(id);               
    }
    goList() {
        this.router.navigate(['/four']);
    }
    // 데이터 상세 보기 
    getFour(id: number): void {
        this.ds.getFour(id).subscribe(
            (four: IFour) => {
                const tmpFour = JSON.stringify(four);
                this.four = JSON.parse(tmpFour);
            },
            error => console.log(error)
        );
    }
    // 수정 페이지로 이동
    goModify() {
        this.router.navigate(['/fourmodify', this.id]);
    }
    // 삭제 페이지로 이동
    goDelete() {
        this.router.navigate(['/fourdelete', this.id]);
    }
}

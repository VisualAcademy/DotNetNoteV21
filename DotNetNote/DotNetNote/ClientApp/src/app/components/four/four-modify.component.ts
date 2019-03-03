import { Component, OnInit } from '@angular/core';
import { FourDataService } from './four.dataservice';
import { IFour } from './four.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    selector: 'four-modify',
    templateUrl: './four-modify.component.html'
})
export class FourModifyComponent implements OnInit {
    id: number;
    four: IFour = { id: 0, note: '' }; // 기본값으로 초기화
    constructor(private route: ActivatedRoute,
        private ds: FourDataService, private router: Router) {
    }
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
    btnSave_Click(frmValue: any) {
        this.ds.updateFour(this.id, frmValue as IFour)
            .subscribe((four: IFour) => {
                if (four) {
                    console.log("수정 완료..." + JSON.stringify(four));
                }
                else {
                    console.log("수정되지 않음...");
                }
            },
            (err: any) => console.log(err),
            () => { this.goDetail(); }
            );
    }
    // 상세보기 페이지로 이동
    goDetail() {
        this.router.navigate(['/fourdetail', this.id]);
    }
}

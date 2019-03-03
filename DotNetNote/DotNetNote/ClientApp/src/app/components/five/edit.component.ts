import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FiveDataService } from './dataservice';
import { IFive, FiveModel } from './model';

@Component({
    selector: 'fiveedit',
    templateUrl: './edit.component.html'
})
export class FiveEditComponent implements OnInit {
    id: number;
    model: IFive = { id: 0, note: '' }; //[!] 기본값으로 초기화

    constructor(private route: ActivatedRoute,
        private ds: FiveDataService, private router: Router) {
    }

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
                const tmpFour = JSON.stringify(five);
                this.model = JSON.parse(tmpFour);
            },
            error => console.log(error)
        );
    }

    btnEdit_Click(frmValue: any) {
        this.ds.updateFive(this.id, frmValue as IFive)
            .subscribe((five: IFive) => {
                if (five) {
                    console.log("수정 완료..." + JSON.stringify(five));
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
        this.router.navigate(['/fivedetail', this.id]);
    }
}

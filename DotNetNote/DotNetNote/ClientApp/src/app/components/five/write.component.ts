import { Component, OnInit } from '@angular/core';
import { FiveDataService } from './dataservice';
import { IFive, FiveModel } from './model';
import { Router } from '@angular/router';

@Component({
    selector: 'five-write',
    templateUrl: './write.component.html'
})
export class FiveWriteComponent implements OnInit {

    model: FiveModel = new FiveModel(0, "");

    // 동의 체크박스 
    isAgree: boolean = false;

    constructor(private ds: FiveDataService, private router: Router) { }

    ngOnInit() { }

    // 저장(전송) 버튼 클릭 
    btnSave_Click(frmValue: any) {
        if (this.isAgree === true) {
            this.ds.addFive(frmValue as IFive)
                .subscribe(
                // 성공
                (five: IFive) => {
                    if (five) {
                        console.log("저장 완료..." + JSON.stringify(five));
                        // 저장 후 리스트 페이지로 이동
                        // this.router.navigate(['/four']);
                    }
                    else {
                        console.log("저장되지 않음...");
                    }
                },
                // 에러
                (err: any) => console.log(err),
                () => { this.router.navigate(['/five']); }
                );
        }
        else {
            console.log("체크박스에 체크해야만 저장이 됩니다.");
        }
    }
}

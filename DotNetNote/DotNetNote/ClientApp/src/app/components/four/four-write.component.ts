import { Component, OnInit } from '@angular/core';
import { FourDataService } from './four.dataservice';
import { IFour } from './four.model';
import { Router } from '@angular/router';

@Component({
    selector: 'four-write',
    templateUrl: './four-write.component.html'
})
export class FourWriteComponent implements OnInit {

    public note: string = ""; 

    constructor(private ds: FourDataService, private router: Router) { }

    ngOnInit() { }

    // 저장(전송) 버튼 클릭 
    btnSave_Click(frmValue) {
        this.ds.addFour(frmValue as IFour)
            .subscribe(
                (four: IFour) => {
                    if (four) {
                        console.log("저장 완료..." + JSON.stringify(four));
                        // 저장 후 리스트 페이지로 이동
                        // this.router.navigate(['/four']);
                    }
                    else {
                        console.log("저장되지 않음...");
                    }
                },
                (err: any) => console.log(err),
                () => { this.router.navigate(['/four']); }            
            );
    }
}

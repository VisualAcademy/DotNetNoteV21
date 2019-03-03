import { Component, OnInit } from '@angular/core';
import { FourDataService } from './four.dataservice';
import { IFour } from './four.model';

@Component({
    selector: 'four',
    templateUrl: './four.component.html'
})
export class FourComponent implements OnInit {
    fours: IFour[] = [];
    errorMsg: any;

    //[1] 생성자
    constructor(private ds: FourDataService) {
    }

    //[2] 컴포넌트(페이지) 로드
    ngOnInit() {
        this.getFours(); 
    }

    // GET
    getFours() {
        this.ds.getFours().subscribe(
            (fours: IFour[]) => { this.fours = fours; },    // 성공 콜백
            (error: any) => { this.errorMsg = <any>error }, // 에러 콜백
            () => console.log('getFours 메서드 호출...')     // 마무리(추가)
        ); 
    }


    getFoursWithPage(newPage: number) {
        this.ds.getFoursWithPaging(newPage).subscribe(
            (fours: IFour[]) => { this.fours = fours; },    // 성공 콜백
            (error: any) => { this.errorMsg = <any>error }, // 에러 콜백
            () => console.log('getFours 메서드 호출...')     // 마무리(추가)
        );
    }


    pageIndexChanging(newPageIndex: number) {
        this.getFoursWithPage(newPageIndex);
    }
}

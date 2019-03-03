import { Component, OnInit } from '@angular/core';
import { FiveDataService } from './dataservice';
import { IFive, IPagedViewModel } from './model';

@Component({
    selector: 'five-list',
    templateUrl: './list.component.html'
})
export class FiveListComponent implements OnInit {
    models: IFive[] = [];
    pageSize: number = 10; // 추가 
    totalRecordCount: number; 
    errorMsg: any;

    //[1] 생성자
    constructor(private ds: FiveDataService) {
    }

    //[2] 컴포넌트(페이지) 로드
    ngOnInit() {
        //this.getFives();
        this.getFivesWithPage(1);
    }

    // GET
    getFives() {
        this.ds.getFives().subscribe(
            (models: IFive[]) => { this.models = models; },     // 성공 콜백
            (error: any) => { this.errorMsg = <any>error },     // 에러 콜백
            () => console.log('getFives 메서드 호출...')         // 마무리
        );
    }

    // GET
    getFivesWithPage(newPage: number) {
        this.ds.getFivesWithPaging(newPage, this.pageSize).subscribe(
            (response: IPagedViewModel<IFive[]>) => {
                this.models = response.records; // 현재 페이지의 레코드 리스트 
                this.totalRecordCount = response.totalRecordCount; // 총 레코드 건수
            },                                                  // 성공 콜백
            (error: any) => { this.errorMsg = <any>error },     // 에러 콜백
            () => console.log('getFives 메서드 호출...')         // 마무리(추가)
        );
    }
    
    pageIndexChanging(newPageIndex: number) {
        this.getFivesWithPage(newPageIndex);
    }
}

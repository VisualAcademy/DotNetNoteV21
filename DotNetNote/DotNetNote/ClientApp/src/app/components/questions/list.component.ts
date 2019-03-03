import { Component, OnInit } from '@angular/core';
import { QuestionDataService } from './dataservice';
import { IQuestion, IPagedViewModel } from './model';

@Component({
    selector: "question-list",
    templateUrl: './list.component.html'
})
export class QuestionListComponent implements OnInit {
    models: IQuestion[] = [];
    pageSize: number = 5; // 추가 
    totalRecordCount: number;
    errorMsg: any;

    //[1] 생성자
    constructor(private ds: QuestionDataService) {
    }

    //[2] 컴포넌트(페이지) 로드
    ngOnInit() {
        this.getAllWithPage(1); // 처음 로드할 때 기본으로 1페이지를 보여줌
    }

    // GET
    getAll() {
        this.ds.getAll().subscribe(
            (models: IQuestion[]) => { this.models = models; },     // 성공 콜백
            (error: any) => { this.errorMsg = <any>error },     // 에러 콜백
            () => console.log('getFives 메서드 호출...')         // 마무리
        );
    }

    // GET
    getAllWithPage(newPage) {
        this.ds.getAllWithPaging(newPage, this.pageSize).subscribe(
            (response: IPagedViewModel<IQuestion[]>) => {
                this.models = response.records; // 현재 페이지의 레코드 리스트 
                this.totalRecordCount = response.totalRecordCount; // 총 레코드 건수
            },                                                  // 성공 콜백
            (error: any) => { this.errorMsg = <any>error },     // 에러 콜백
            () => console.log('getFives 메서드 호출...')         // 마무리(추가)
        );
    }

    // 페이저에서 넘어온 번호에 해당하는 페이지를 다시 호출 
    pageIndexChanging(newPageIndex: number) {
        this.getAllWithPage(newPageIndex);
    }
}

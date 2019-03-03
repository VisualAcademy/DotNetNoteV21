import { Component, OnInit } from '@angular/core';
import { HeroesDataService } from './heroes.data.service';
import { IHero, IPagedViewModel } from './model';

@Component({
    selector: 'heroes-index',
    templateUrl: './heroes.index.component.html'
})
export class HeroesIndexComponent implements OnInit {
    models: IHero[] = [];
    totalRecordCount: number; // 총 레코드 수
    pageSize: number = 3; // 페이지 크기

    constructor(private ds: HeroesDataService) {
    }

    ngOnInit() {
        //this.getAll();
        this.getAllWithPaging(1, this.pageSize);
    }

    // 전체 레코드 출력
    getAll() {
        this.ds.getAll().subscribe(
            (models: IHero[]) => { this.models = models; },
            (error: any) => { console.log(error); },
            () => { console.log('getAll() 메서드 호출 완료...'); }
        );
    }

    // 페이징 처리된 레코드 출력
    getAllWithPaging(newPage: number, pageSize: number) {
        // 데이터 서비스에서 만들어놓은 메서드의 Observable<T> 반환 값은 subscribe() 메서드로 호출해서 사용
        this.ds.getAllWithPaging(newPage, pageSize).subscribe(
            (response: IPagedViewModel<IHero[]>) => {
                this.models = response.records; // 현재 페이지의 레코드 리스트
                this.totalRecordCount = response.totalRecordCount; // 총 레코드 건수 
            },
            (error: any) => { console.log(error); },
            () => { console.log('getAllWithPaging() 메서드 호출 완료...'); }
        );
    }

    // 페이저 컨트롤에서 넘어온 번호에 해당하는 페이지를 다시 호출
    pageIndexChaging(newPageIndex: number) {
        this.getAllWithPaging(newPageIndex, this.pageSize);
    }
}

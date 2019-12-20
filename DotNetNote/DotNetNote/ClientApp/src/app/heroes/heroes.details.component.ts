import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHero, HeroModel } from './model';
import { HeroesDataService } from './heroes.data.service';

@Component({
    selector: 'heroes-details',
    templateUrl: './heroes.details.component.html' 
})
export class HeroesDetailsComponent implements OnInit {
  // 모델
  model: IHero = { id: 0, name: "", icon: "", created: "" }; // 기본값으로 초기화

    id: number; 

    constructor(
        private router: Router,             // 페이지 이동
        private route: ActivatedRoute,      // 쿼리스트링 받기
        private ds: HeroesDataService       // 데이터 서비스 클래스
    ) { }

    ngOnInit() {
        let id = this.route.snapshot.params["id"]; // id 매개변수 받기 
        this.id = +id;

        // {id}에 해당하는 데이터 읽어오기
        this.getById(id); 
    }

    // 상세 보기 데이터 읽어오기 
    getById(id: number): void {
        this.ds.getById(id).subscribe(
            (model: IHero) => {
                const tmp = JSON.stringify(model);
                this.model = JSON.parse(tmp); 
            },      // 성공 콜백
            (err) => {
                console.log("상세 보기 페이지 에러 발생: ");
                console.log(err);
            },      // 에러 콜백
            () => {
                console.log("상세 보기 페이지 읽기 완료");
            }       // 최종 콜백
        ); 
    }

    // 리스트 페이지로 이동
    goList(): void {
        //console.log("리스트");
        this.router.navigate(['/heroes']);
    }

    // 수정 페이지로 이동
    goModify(): void {
        //console.log("수정");
        this.router.navigate(['/heroes/edit', this.id]);
    }

    // 삭제 페이지로 이동
    goDelete(): void {
        //console.log("삭제");
        this.router.navigate(['/heroes/delete', this.id]);
    }
}

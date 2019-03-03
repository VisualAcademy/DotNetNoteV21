import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHero, HeroModel } from './model';

@Component({
    selector: 'heroes-details',
    templateUrl: './heroes.details.component.html'
})
export class HeroesDetailsResolverComponent implements OnInit {
    id: number;
    model: IHero = { id: 0, name: "", icon: "", created: "" }; // 기본값으로 초기화 

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        let id = this.route.snapshot.params["id"]; // id 매개변수 받기 
        this.id = +id;

        //[!] 라우트 리졸버 서비스 클래스 사용하기 
        //this.model = this.route.snapshot.data["hero"];
        this.route.data.subscribe((data) => {
            this.model = data["hero"];
        }); 
    }

    // 리스트 페이지로 이동
    goList(): void {
        console.log("리스트"); this.router.navigate(['/heroes']);
    }
    // 수정 페이지로 이동
    goModify(): void {
        console.log("수정"); this.router.navigate(['/heroes/edit', this.id]);
    }
    // 삭제 페이지로 이동
    goDelete(): void {
        console.log("삭제"); this.router.navigate(['/heroes/delete', this.id]);
    }
}

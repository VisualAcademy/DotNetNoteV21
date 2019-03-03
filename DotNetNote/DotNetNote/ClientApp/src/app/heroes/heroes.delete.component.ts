import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesDataService } from './heroes.data.service'

@Component({
    selector: 'heroes-delete',
    templateUrl: './heroes.delete.component.html'
})
export class HeroesDeleteComponent implements OnInit {
    id: number; 
    password: string; 

    constructor(private route: ActivatedRoute, private router: Router, private ds: HeroesDataService) {

    }

    ngOnInit() {
        this.id = +this.route.snapshot.params["id"]; // id 값 받기
    }

    // 삭제 버튼 클릭
    btnSubmit_Click(password: string) {
        // 삭제 처리
        this.ds.delete(this.id).subscribe(r => console.log(r)); 

        // 리스트 페이지로 이동
        this.goList(); 
    }

    // 상세 보기로 이동
    goDetail() {
        this.router.navigate(['/heroes/details', this.id]);
    }

    // 리스트 페이지로 이동
    goList(): void {
        console.log("리스트"); this.router.navigate(['/heroes']);
    }
}

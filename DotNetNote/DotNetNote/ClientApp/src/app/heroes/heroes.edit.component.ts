import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHero, HeroModel } from './model';

import { HeroesDataService } from './heroes.data.service';

@Component({
    selector: 'heroes-edit',
    templateUrl: './heroes.edit.component.html'
})
export class HeroesEditComponent implements OnInit {
    id: number;
    model: IHero = { id: 0, name: "", icon: "", created: "" }; // 기본값으로 초기화 
    // 동의 체크박스
    isAgree: boolean = true; 
    constructor(private router: Router, private route: ActivatedRoute, private ds: HeroesDataService) { }
    ngOnInit() {
        let id = this.route.snapshot.params["id"]; // id 매개변수 받기 
        this.id = +id;
        //[!] 라우트 리졸버 서비스 클래스 사용하기 
        //this.model = this.route.snapshot.data["hero"];
        this.route.data.subscribe((data) => {
            this.model = data["hero"];
        });
    }
    // 상세 보기 페이지로 이동
    goDetail(): void {
        console.log("상세 보기"); this.router.navigate(['/heroes/details', this.id]);
    }

    // 수정(전송) 버튼 클릭
    btnSubmit_Click(frmValue) {
        if (this.isAgree === true) {

            // 데이터 저장
            this.ds.update(this.id, frmValue as IHero).subscribe(
                (model: IHero) => {
                    if (model) {
                        console.log("수정 완료... : " + JSON.stringify(model));
                        // 저장 후 리스트 페이지로 이동
                        // this.router.navigate(['/heroes']);
                    }
                    else {
                        console.log("수정되지 않음...");
                    }
                },  // 성공 콜백
                (err: any) => {
                    console.log(`수정 에러 발생: ${err}`);
                },  // 에러 콜백
                () => {
                    //this.router.navigate(['/heroes/details', this.id]);
                    this.goDetail(); 
                }   // 마무리 콜백
            );

        }
        else {
            console.log("체크박스에 체크해야만 저장이 됩니다.");
        }
    }
}

import { Component, OnInit } from '@angular/core';
import { IHero, HeroModel } from './model';
import { HeroesDataService } from './heroes.data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'heroes-write',
    templateUrl: './heroes.write.component.html'
})
export class HeroesWriteComponent implements OnInit {

    // 모델
    model: HeroModel = new HeroModel(0, "", "", null); 

    // 동의 체크박스
    isAgree: boolean = true; 

    constructor(private ds: HeroesDataService, private router: Router) { }

    ngOnInit() { }

    // 저장(전송) 버튼 클릭
    btnSubmit_Click(frmValue) {
        if (this.isAgree === true) {

            // 데이터 저장
            this.ds.add(frmValue as IHero).subscribe(
                (model: IHero) => {
                    if (model) {
                        console.log("저장 완료... : " + JSON.stringify(model));
                        // 저장 후 리스트 페이지로 이동
                        // this.router.navigate(['/heroes']);
                    }
                    else {
                        console.log("저장되지 않음...");
                    }
                },  // 성공 콜백
                (err: any) => {
                    console.log(`저장 에러 발생: ${err}`);
                },  // 에러 콜백
                () => {
                    // 저장 후 리스트 페이지로 이동 
                    this.router.navigate(['/heroes']);
                }   // 마무리 콜백
            );

        }
        else {
            console.log("체크박스에 체크해야만 저장이 됩니다.");
        }
    }

    // 텍스트박스에서 포커스를 잃었을 때
    txtName_Blur() {
        this.ds.getByName(this.model.name).subscribe(
            (model: IHero) => {
                if (model.name != null) {
                    alert('이미 있는 이름입니다.');
                }
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

}

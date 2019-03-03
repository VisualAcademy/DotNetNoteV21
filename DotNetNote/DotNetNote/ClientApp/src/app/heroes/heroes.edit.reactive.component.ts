import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHero, HeroModel } from './model';

import { HeroesDataService } from './heroes.data.service';

import {
    FormBuilder, FormGroup, Validators, FormControl
} from '@angular/forms'; // 리액티브 폼 사용

@Component({
    selector: 'heroes-edit-reactive',
    templateUrl: './heroes.edit.reactive.component.html'
})
export class HeroesEditReactiveComponent implements OnInit {
    id: number;
    model: IHero = { id: 0, name: "", icon: "", created: "" }; // 기본값으로 초기화 

    public editForm: FormGroup; //[!] 

    // 동의 체크박스
    isAgree: boolean = true;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private ds: HeroesDataService,
        private fb: FormBuilder) { }

    ngOnInit() {
        let id = this.route.snapshot.params["id"]; // id 매개변수 받기 
        this.id = +id;
        //[!] 라우트 리졸버 서비스 클래스 사용하기 
        //this.model = this.route.snapshot.data["hero"];
        this.route.data.subscribe((data) => {
            this.model = data["hero"];
        });

        //[1] 페이지 로드시 FormGroup 생성
        this.formCreate(); 
    }

    //[!] FormGroup 생성 및 다시 값 설정
    formCreate() {
        // FormBuilder 
        this.editForm = this.fb.group({
            id: [this.model.id, Validators.required],
            name: [this.model.name, [Validators.required, Validators.minLength(2)]],
            //email: [this.model.name, [Validators.required, Validators.pattern('')]],
            icon: [this.model.icon, []],
        }); 
    }

    // 상세 보기 데이터 읽어오기: 이 코드는 참고용으로 삽입
    getById(id: number): void {
        this.ds.getById(id).subscribe(
            (model: IHero) => {
                const tmp = JSON.stringify(model);
                this.model = JSON.parse(tmp);
                //[2] 특정 id에 해당하는 자료 가지고 온 후 그 값으로 다시 설정
                this.formCreate(); 
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

    // 상세 보기 페이지로 이동
    goDetail(): void {
        console.log("상세 보기");
        this.router.navigate(['/heroes/details', this.id]);
    }

    // 수정(전송) 버튼 클릭
    btnSubmit_Click(evt) {
        console.log("[HeroesEditReactiveComponent] btnSubmit 버튼 클릭: " + evt);
        // 데이터 저장
        this.ds.update(this.id, this.editForm.value as IHero).subscribe(
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
}

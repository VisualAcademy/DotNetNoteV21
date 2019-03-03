import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionDataService } from './dataservice';
import { IQuestion, QuestionModel } from './model';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; // 

@Component({
    selector: 'question-edit-reactive',
    templateUrl: './edit.reactive.component.html'
})
export class QuestionEditReactiveComponent implements OnInit {
    id: number;
    model: IQuestion = { id: 0, title: '' }; //[!] 기본값으로 초기화

    public editForm: FormGroup; //[!]

    constructor(private route: ActivatedRoute,
        private ds: QuestionDataService, private router: Router,
        public fb: FormBuilder) {
    }

    ngOnInit() {
        let id = +this.route.snapshot.params["id"]; // id 매개변수 받기
        this.id = id;
        this.getData(id);
        //[!]
        this.formCreate(); //[1] 페이지 로드시 FormGroup 생성 
    }

    //[!] FormGroup 생성 및 다시 값 설정
    formCreate() { 
        this.editForm = this.fb.group({
            id:         [this.model.id, Validators.required],
            title:      [this.model.title, [Validators.required, Validators.minLength(2)]]
        }); 
        //console.log("값" + this.editForm.get("title").value); 
    }

    goList() {
        this.router.navigate(['/question']);
    }

    // 데이터 상세 보기 
    getData(id: number): void {
        this.ds.getById(id).subscribe(
            (model: IQuestion) => {
                const tmpFour = JSON.stringify(model);
                this.model = JSON.parse(tmpFour);
                //[2] 특정 id에 해당하는 자료 가지고 온 후 그 값으로 다시 설정
                this.formCreate(); 
            },
            error => console.log(error)
        );
    }

    //[!]
    save(event) {
        console.log(event);
        console.log(this.editForm.value); // id와 title을 갖는 값

        // 폼의 값을 전송할 때에는 UI 또는 코드에서 직접 전송 가능
        this.ds.update(this.id, this.editForm.value as IQuestion)
            .subscribe((model: IQuestion) => {
                if (model) {
                    console.log("수정 완료..." + JSON.stringify(model));
                }
                else {
                    console.log("수정되지 않음...");
                }
            },
            (err: any) => console.log(err),         // 에러 핸들러
            () => { this.goDetail(); }              // 마무리 핸들러 
            );
    }

    // 상세보기 페이지로 이동
    goDetail() {
        this.router.navigate(['/questiondetail', this.id]);
    }
}

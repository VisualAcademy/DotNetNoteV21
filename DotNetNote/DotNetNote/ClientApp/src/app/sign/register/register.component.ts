import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignService } from '../sign.service';
import { ISignBase } from '../../models/sign/ISignBase';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styles: [`
        .has-error {
            background-color: yellow;
        }
    `]
})
export class RegisterComponent implements OnInit {
    frmRegister: FormGroup; 

    constructor(private fb: FormBuilder, private ss: SignService) {
    }

    ngOnInit() {
        //[1] 페이지 로드시 FormGroup 생성
        this.formCreate();
    }

    btnSubmit_Click() {
        let model: ISignBase = this.frmRegister.value as ISignBase;
        this.ss.register(model);
    }

    formCreate() {
        this.frmRegister = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        }); 
    }

    // 텍스트박스의 유효성 체크 공통 함수
    isValid(ctl: string) {
        return this.frmRegister.controls[ctl].invalid && this.frmRegister.controls[ctl].touched;
    }
}

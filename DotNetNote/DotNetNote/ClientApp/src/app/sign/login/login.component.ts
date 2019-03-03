import { Component, OnInit } from '@angular/core';
import { SignService } from '../sign.service';
import { ISignBase } from '../../models/sign/ISignBase';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styles: []
})
export class LoginComponent implements OnInit {

    sign = {
        email: "",
        password: ""
    };

    returnUrl: string; 

    constructor(private ss: SignService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParamMap.get("returnUrl");
    }

    // 로그인 처리
    btnLogin_Click() {
        //alert(this.sign.email + ", " + this.sign.password);
        let model: ISignBase = this.sign as ISignBase;

        this.ss.login(model).subscribe(
            (isAuthenticated: boolean) => {
                if (isAuthenticated) {
                    if (this.returnUrl) {
                        // 이전 페이지로 이동
                        this.router.navigateByUrl(this.returnUrl);
                    }
                    else {
                        // 회원 가입 후 로그인 되었으면 Home 페이지로 이동
                        this.router.navigate(['/home']);
                    }
                }
            },
            (error: any) => { console.log('로그인 에러'); },
            () => { console.log('로그인 완료'); }
        );
    }
}

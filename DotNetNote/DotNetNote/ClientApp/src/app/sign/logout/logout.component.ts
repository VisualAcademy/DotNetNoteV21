import { Component, OnInit } from '@angular/core';
import { SignService } from '../sign.service';
import { Router } from '@angular/router';

@Component({
    selector: 'sign-logout',
    template: "",
    styles: [],
    providers: [
        SignService
    ]
})
export class LogoutComponent implements OnInit {
    constructor(private signService: SignService, private router: Router) { }

    ngOnInit() {
        this.signService.logout(); 
        this.router.navigate(['/home']);
    }
}

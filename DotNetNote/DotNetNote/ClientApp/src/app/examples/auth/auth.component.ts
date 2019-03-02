import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: "auth",
    template: `
    <button (click)="btnLogin_Click()">로그인</button>
    <span *ngIf="this.as.isAuthenticated">
        안녕하세요. {{this.as.username}}
    </span>

    <button *ngIf="this.as.isAuthenticated" (click)="this.as.logout()">로그아웃</button>
    `
})
export class AuthComponent implements OnInit {
    title: string = "카테고리 리스트";

    categories: any = [];

    constructor(public as: AuthService) {

    }

    ngOnInit() {
        // getCategories() 함수 호출
        this.as.post(); 
    }

    btnLogin_Click() {
        this.as.post(); 
    }
}

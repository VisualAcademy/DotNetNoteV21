import { Component, OnInit } from '@angular/core';
// ActivatedRoute 서비스 클래스 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'routing-view',
    template: `
<h1>상세보기</h1>
<p>넘어온 매개변수 id값: {{id}}</p>
<button (click)="goBack()">뒤로</button>
    `
})
export class RoutingView implements OnInit {
    id: number; 
    constructor(private route: ActivatedRoute
        , private router: Router) { }
    // 페이지 로드
    ngOnInit() {
        this.id = +this.route.snapshot.params["id"];
    }
    goBack(): void { this.router.navigate(['/routinglist']); }
}

//[!] 템플릿 기반 폼 사용 연습
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FourDataService } from './four.dataservice';

@Component({
    selector: "four-delete",
    templateUrl: './four-delete.component.html'
})
export class FourDeleteComponent implements OnInit {
    password: string;
    id: number; 
    constructor(private route: ActivatedRoute,
        private router: Router, private ds: FourDataService) { }
    ngOnInit() {
        this.id = this.route.snapshot.params["id"]; 
    }
    btnSubmit_Click(password: string) {
        console.log(this.id);
        console.log(password);
        this.ds.deleteFour(this.id).subscribe(r => console.log(r)); // 삭제
        this.router.navigate(['/four']); // 리스트 페이지로 이동 
    }
    goDetail() {
        this.router.navigate(['/fourdetail', this.id]);
    }
}

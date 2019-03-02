import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'goods',
    templateUrl: './goods.component.html',
    styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

    public title: string = "제품 관리";

    ngOnInit() {

    }

}

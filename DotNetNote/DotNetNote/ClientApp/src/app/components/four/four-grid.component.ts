import { Component, Input, OnInit } from '@angular/core';
import { IFour } from './four.model';
@Component({
    selector: "four-grid",
    template: `
<table class="table table-bordered table-hover table-condensed">
<thead><tr><th>번호</th><th>노트</th><tr></thead>
<tbody><tr *ngFor="let t of fours"><td>{{t.id}}</td>
<td><a [routerLink]="['/fourdetail', t.id]">{{t.id}} - {{t.note}}</a>
</td></tr></tbody></table>
`
})
export class FourGridComponent implements OnInit {
    @Input()
    fours: IFour[] = [];
    constructor() {
    }
    ngOnInit() {
    }
}

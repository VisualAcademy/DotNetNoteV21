import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IFive } from './model';

@Component({
    selector: "five-grid",
    template: `
    <table class="table table-bordered table-hover table-condensed">
    <thead><tr><th>번호</th><th>노트</th><tr></thead>
    <tbody><tr *ngFor="let t of models"><td>{{t.id}}</td>
    <td><a [routerLink]="['/fivedetail', t.id]">{{t.id}} - {{t.note}}</a>
    </td></tr></tbody></table>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush // 추가
})
export class FiveGridComponent implements OnInit {
    @Input()
    models: IFive[] = [];
    constructor() {
    }
    ngOnInit() {
    }
}

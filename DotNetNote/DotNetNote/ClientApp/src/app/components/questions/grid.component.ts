import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IQuestion } from './model';

@Component({
    selector: "question-grid",
    templateUrl: './grid.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush // 추가
})
export class QuestionGridComponent implements OnInit {
    @Input()
    models: IQuestion[] = [];
    constructor() {
    }
    ngOnInit() {
    }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: "grades-graph",
    templateUrl: "./grades.graph.component.html"
})
export class GradesGraphComponent implements OnInit {
    ngOnInit() { }
    _score: number = 0; 
    @Input()
    get score(): number {
        return this._score; 
    }
    set score(score: number) {
        this._score = score; 
        this.printGrade(); // 업데이트 기능
    }
    grade: string = '';
    printGrade(): void {
        if (this._score >= 90) {
            this.grade = 'A학점';
        }
        else if (this._score >= 80) {
            this.grade = 'B학점';
        }
        else {
            this.grade = ''; 
        }
    }
}


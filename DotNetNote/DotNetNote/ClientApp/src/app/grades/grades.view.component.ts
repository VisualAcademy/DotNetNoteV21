import { Component } from '@angular/core';

@Component({
    selector: "grades-view",
    templateUrl: "./grades.view.component.html"
})
export class GradesViewComponent {
    score: number = 0; 
    message: string = ""; 
    btnSubmit_Click(): void {
        this.message = `입력하신 점수는 ${this.score}입니다.`;
    }
}

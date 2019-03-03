import { Component } from '@angular/core';
@Component({
    selector: 'coin-viewer',
    templateUrl: './coinviewer.component.html'
})
export class CoinViewerComponent {
    money: number = 0; 
    message: string = "";
    submit(): void {
        this.message = "버튼이 클릭되었습니다. : ";
        this.message += `${this.money}을(를) 입력하셨군요.`;
        this.showMoney(this.money);
    }
    showMoney(n: number): void {
        let money = n; let won = 50000; let cnt = 0; let sw = 0; 
        for (var i = 0; i < 10; i++) {
            cnt = Math.floor(money / won); this.message += `${won}원 : ${cnt}매`;
            money = money - (won * cnt); 
            if (sw == 0) {
                won = won / 5; sw = 1;
            }
            else {
                won = won / 2; sw = 0;
            }
        }
    }
}

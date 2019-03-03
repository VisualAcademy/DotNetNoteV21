import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'coin-graph',
    templateUrl: './coingraph.component.html'
})
export class CoinGraphComponent implements OnInit {
    //[1] 이 값은 CoinViewer와 같은 컴포넌트에서 속성 바인딩으로 넘어옴
    _coins: number = 0;
    @Input() // @Input 데코레이터
    get coins(): number {
        return this._coins;
    }
    set coins(coins: number) {
        this._coins = coins; 
        this.getCountCoin(); // 코인 개수 업데이트 
    }
    TT: number = 0; T: number = 0; H: number = 0; W: number = 0;
    ngOnInit() {  }
    getCountCoin(): void {
        let money = this._coins;
        this.TT = Math.floor(money / 10000);
        money = money - (this.TT * 10000);
        this.T = Math.floor(money / 1000);
        money = money - (this.T * 1000);
        this.H = Math.floor(money / 100);
        money = money - (this.H * 100);
        this.W = money;
    }
}

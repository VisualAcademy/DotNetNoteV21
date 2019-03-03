import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'TopRanking',
    template: `
<div [ngSwitch]="rank" class="text-center" (click)="boxClick()">
    <img src="/images/One.gif" *ngSwitchCase="1" />
    <img src="/images/Two.gif" *ngSwitchCase="2" />
    <img src="/images/Three.gif" *ngSwitchCase="3" />
    <span *ngSwitchDefault>{{ rank }}</span>
</div>
    `
})
export class TopRankingComponent {
    //[1] 이 값은 MyRanking 컴포넌트에서 속성 바인딩으로 넘어옴
    @Input() // @Input 데코레이터 
    public rank: any; 

    //[2] 이 값은 MyRanking 템플릿에서 이벤트 바인딩으로 eventEmitter 호출
    @Output() // @Output 데코레이터 
    public eventEmitter = new EventEmitter();

    public boxClick() {
        this.eventEmitter.emit(this.rank + " 클릭됨"); // 부모에게 전달
    }
}

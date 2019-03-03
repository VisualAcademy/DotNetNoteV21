import { Component } from '@angular/core';

@Component({
    selector: 'demo_data_bound',
    templateUrl: './demo_data_bound.component.html'
})
export class Demo_Data_BoundComponent {

    title = "데이터 바인딩 데모";

    score = { kor: 88, eng: 68 };

}


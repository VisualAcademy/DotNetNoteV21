import { Component } from '@angular/core';

import { ITech } from './tech';

@Component({
    selector: 'quickstart',
    templateUrl: './quickstart.component.html'
})
export class QuickStartComponent { 
    title: string = 'Angular 퀵스타트'; // 속성(필드)
    description: string = 'Angular 퀵스타트 예제입니다.';
    name: string = 'RedPlus';    

    // 컬렉션 형태의 데이터: *ngFor 구문 사용 출력
    teches: ITech[] = [
        {id: 1, title:'Angular'},
        {id: 2, title:'ASP.NET Core'},
        {id: 3, title:'Azure Web App'},
        {id: 4, title:'TypeScript'}
    ]; 

}



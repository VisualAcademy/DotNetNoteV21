import { Component } from '@angular/core';

@Component({
    selector: 'ngif-ngfor',
    template: `
        <h1>ngIf와 ngFor</h1>
        <h2 *ngIf="30 > 5">보이거나 안보이거나</h2>
        <h3 *ngIf="isShow">코드의 값에 따라서 표시</h3>
        <ul>
            <li *ngFor="let person of people">
                {{ person }}
            </li>
        </ul>
        <table class="table table-bordered">
            <tr *ngFor="let t of techs">
                <td>{{t.id}}</td><td>{{t.title}}</td>
            <tr>
        </table>
    `
})
export class NgIfNgForComponent {
    isShow: boolean = true; 
    people: string[] = ['홍길동', '백두산', '임꺽정'];
    techs: Array<any> = [
        { "id": "1", "title": "Angular" },
        { "id": "2", "title": "ASP.NET Core" },
        { "id": "3", "title": "Azure Web App" }
    ]; 
}

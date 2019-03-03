import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ngstyle',
    templateUrl: './ngstyle.component.html',
    styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    // 코드 비하인드에서 배경색 반환
    getBgColor(): string {
        return (new Date()).getSeconds() % 2 == 0 ? "yellow" : "green";
    }
}

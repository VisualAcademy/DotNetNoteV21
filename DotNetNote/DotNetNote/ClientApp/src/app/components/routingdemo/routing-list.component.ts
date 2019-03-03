import { Component } from '@angular/core';

@Component({
    selector: 'routing-list', 
    template: `
<h1>리스트</h1>
<ul>
    <li><a href="/">Home</a></li>
    <li><a [routerLink]="['/home']">Home</a></li>
    <li><a [routerLink]="['/routingview', 1]">상세보기 1</a></li>
    <li><a [routerLink]="['/routingview', 1234]">상세보기 1234</a></li>
</ul>
    `
})
export class RoutingList {

}

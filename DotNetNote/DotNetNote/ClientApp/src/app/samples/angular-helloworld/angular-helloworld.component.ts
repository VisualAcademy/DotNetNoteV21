import { Component } from '@angular/core';

@Component({
    selector: 'angular-helloworld',
    template: `
    <h1 [style.color]="foreColor" 
        (click)="btnChange_Click()">{{ title }}</h1>
    `
})
export class AngularHelloWorldComponent { 
    title: string = "<명언 관리>";
    foreColor = 'red';
    btnChange_Click(): void {
        this.foreColor = (this.foreColor === 'red') ? 'blue' : 'red';
    }
}

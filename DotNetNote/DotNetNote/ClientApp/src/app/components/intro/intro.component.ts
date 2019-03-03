import { Component } from '@angular/core';
@Component({
    selector: 'intro',
    template: `
        <h1>{{name}}</h1>
        <h2>{{title}}</h2>
        <h3>{{work()}}</h3>
    `
})
export class IntroComponent {
    name: string = "박용준";
    title: string = "Microsoft MVP"; 
    work() { return "http://www.devlec.com"; }
}

import { Component, OnInit } from '@angular/core';

import { trigger, state, style, transition, keyframes, animate } from "@angular/animations"; // Angular 4.0
//import { trigger, state, style, transition, keyframes, animate } from "@angular/core"; // Angular 2.0

@Component({
    selector: 'app-animation-small-big',
    template: `
        <br /><br /><br /><br /><br />
        <h1 [@myAnimation]="state" (click)="changeState()">
          Angular 2 & 4 Animation
        </h1>
  `,
    styles: [],
    animations: [
        trigger('myAnimation', [
            state('small', style({
                transform: 'scale(1)'
            })),
            state('big', style({
                transform: 'scale(1.2)'
            })),
            // transition('small => big', animate('300ms ease-in')),
            // transition('big => small', animate('300ms ease-out')),
            // transition('small => big, big => small', animate('500ms')),
            // transition('small <=> big', animate('500ms')),
            // transition('small <=> big', animate('500ms ease-in', style({
            //   transform: 'translateX(150px)'
            // }))),
            transition('small <=> big', animate('3000ms ease-in', keyframes([
                style({ offset: 0, opacity: 0 }),
                style({ offset: 0.5, opacity: 1 }),
                style({ offset: 1, opacity: 0.5 })
            ]))),

        ])
    ]
})
export class AnimationSmallBigComponent implements OnInit {
    state: string = "small";
    changeState() {
        this.state = this.state === "small" ? "big" : "small";
        console.log(this.state);
    }
    constructor() { }
    ngOnInit() { }
}

import * as c from '@angular/core';
//import * as a from '@angular/animations'; 

@c.Component({
    selector: 'animation-basic',
    template: `
        <h1>애니메이션 기본</h1>
        <div *ngIf="exp">
            활성화됨 
        </div>
        <button (click)="toggle()">활성화</button>
    `,
    animations: [

    ]
})
export class AnimationBasicComponent {
    exp: boolean = true; 
    toggle(): void {
        this.exp = !this.exp;
    }
}

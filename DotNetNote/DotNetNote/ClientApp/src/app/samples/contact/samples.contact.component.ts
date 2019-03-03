import { Component } from '@angular/core';

@Component({
    selector: 'contact',
    template: '안녕하세요, 제 이름은 {{name}}입니다.'
})
export class SamplesContactComponent {
    public name: string; 
    constructor() {
        this.name = '박용준';
    }
}

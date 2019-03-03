
import { Component } from '@angular/core';

@Component({
    selector: 'character',
    template: '안녕하세요, 제 이름은 {{name}}입니다.'
})
export class CharacterComponent {
    name = ""; 
    constructor() {
        this.name = '자식 컴포넌트';
    }
}



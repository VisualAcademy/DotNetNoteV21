import { Component } from '@angular/core';

@Component({
    selector: 'characters',
    template: '안녕하세요, 제 이름은 {{name}}입니다.'
})
export class CharactersComponent {
    name = "";
    constructor() {
        this.name = 'Sam';
    }
}

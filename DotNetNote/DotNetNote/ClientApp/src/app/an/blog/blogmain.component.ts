
import { Component } from '@angular/core';

@Component({
    selector: 'blog-main',
    template: '안녕하세요, 제 이름은 {{name}}입니다.'
})
export class BlogMainComponent {
    name = "";
    constructor() {
        this.name = 'Sam';
    }
}

import { Component } from '@angular/core';

@Component({
    selector: 'data-binding-demo',
    templateUrl: './DataBindingDemo.html'
})
export class DataBindingDemo {
    public title: string = "바인딩 표현식";
    public color = "yellow";
    public flag = false;

    btnToggle() {
        this.flag = !this.flag;
    }
}

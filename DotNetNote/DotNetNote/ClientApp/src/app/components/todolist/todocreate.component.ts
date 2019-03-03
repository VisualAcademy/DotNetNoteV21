import { Component } from '@angular/core';
import { ToDoDataService } from './tododata.service';

@Component({
    selector: 'todo-create',
    template: `
        <h3>등록</h3>
        <form (ngSubmit)="onSubmit()">
            <input type="text" [(ngModel)]="title" name="title">
            <input type="submit" value="저장" />
        </form>
    `
})
export class ToDoCreateComponent {
    title: string; 
    constructor(private ds: ToDoDataService) {}
    onSubmit() {
        console.log(this.title); 
        let todo = { "title": this.title, "isComplete": false };
        console.log(todo); 
        this.ds.addTodo(todo); 
    }
}
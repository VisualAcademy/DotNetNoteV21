import { Component, OnInit } from '@angular/core';
import { ToDoDataService } from './tododata.service';
@Component({
    selector: 'todo-list',
    template: `
        <h3>리스트</h3>
        <ul>
            <li *ngFor="let todo of todos">
                <span [class.completed]="todo.isComplete">
                    {{todo.title}} - {{todo.isComplete}}</span>
                <button (click)="btnComplete_Click(todo)">완료</button>
            </li>
        </ul>
    `,
    styles: [".completed { text-decoration: line-through; }"]
})
export class ToDoListComponent implements OnInit {
    todos: any[];
    constructor(private ds: ToDoDataService) {
        this.todos = ds.getTodos(); 
    }
    ngOnInit() { }
    btnComplete_Click(todo: any) {
        console.log(todo);
        todo.isComplete = !todo.isComplete; // 토글
    }
}

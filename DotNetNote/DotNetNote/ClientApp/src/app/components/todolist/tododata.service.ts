import { Injectable } from '@angular/core';

@Injectable()
export class ToDoDataService {
    todos: any[];
    constructor() {
        this.todos = [
            { "title": "공부하기", "isComplete": false },
            { "title": "개발하기", "isComplete": false },
            { "title": "여행하기", "isComplete": false }
        ];
    }
    // 출력
    getTodos(): any[] {
        return this.todos; 
    }
    // 입력
    addTodo(todo: any): void {
        this.todos.push(todo); 
    }
}


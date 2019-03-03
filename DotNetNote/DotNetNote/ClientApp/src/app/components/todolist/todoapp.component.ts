import { Component, OnInit } from '@angular/core';

@Component({
  selector: "todo",
  template: `
    <h2>할일 목록</h2>
    <todo-create></todo-create>
    <todo-list></todo-list>
  `
})
export class ToDoAppComponent implements OnInit {
  ngOnInit() {

  }
}




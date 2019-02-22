import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todos;
  constructor() { }

  ngOnInit() {
  }
deleteTodo(index) {
    this.todos.splice(index, 1);
    localStorage.setItem("toDO", JSON.stringify(this.todos));
  }
}

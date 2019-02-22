import { Component, OnInit } from '@angular/core';
import { Todo } from './../model/todo.model'

@Component({
  selector: 'app-todoinput',
  templateUrl: './todoinput.component.html',
  styleUrls: ['./todoinput.component.scss']
})
export class TodoInputComponent implements OnInit {
  newTodo: string;
  todos: any;
  todoObj: any;


  all = false;
  filter: ('all' | 'active' | 'completed') = 'all';
  edit = -1;

  items: Todo[] = [];

  constructor() {
    this.newTodo = '';
    this.todos = [];

    if (localStorage.getItem("toDO") != null) {
      this.todos = JSON.parse(localStorage.getItem("toDO"));
    }

    if (localStorage.getItem("toDO1") != null) {
      this.items = JSON.parse(localStorage.getItem("toDO1"));
    }
  }

  ngOnInit() {
  }
  addTodo(event) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todos.push(this.todoObj);
    localStorage.setItem("toDO", JSON.stringify(this.todos));
    this.newTodo = '';
    event.preventDefault();

  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
    localStorage.setItem("toDO", JSON.stringify(this.todos));
  }

  deleteSelectedTodos() {
    for (var i = (this.todos.length - 1); i > -1; i--) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
    localStorage.setItem("toDO", JSON.stringify(this.todos));
  }


  // to do
  getItems() {
    return this.items.filter((item, i) => {
      item['i'] = i;
      return this.filter === 'all' || item.completed === (this.filter === 'completed');
    });
  }

  getItemsLeft() {
    return this.items.filter(item => !item.completed);
  }

  getItemsComplete() {
    return this.items.filter(item => item.completed);
  }

  addItem(title: string) {
    if (title) {
      const newTodo: Todo = {
        title: title,
        completed: false,
        order: this.items.length > 0 ? (this.items[this.items.length - 1].order + 64) : 0
      };
      this.items.push(newTodo);
      localStorage.setItem("toDO1", JSON.stringify(this.items));
      this.all = false;

    }
  }

  deleteCompleted() {
    const comp = this.items.filter(item => item.completed);
    this.items = this.getItemsLeft();

    localStorage.setItem("toDO1", JSON.stringify(this.items));
    this.all = false;
  }

  delItem(i: number) {
    // this.todosService.deleteOneTodo(this.items[i]._id)
    //   .subscribe(c => null);
    // this.items.splice(i, 1);
  }

  toggleItem(i: number) {
    this.all = false;
    this.items[i].completed = !this.items[i].completed;
    this.updateItem(this.items[i]);
  }

  toggleAll() {
    this.all = !this.all;
    this.items.forEach(item => {
      if (item.completed !== this.all) {
        item.completed = this.all;
        this.updateItem(item);
      }
    });
  }

  reTitle(i: number) {
    this.edit = -1;
    const item = this.items[i];
    if (item.title) {
      this.updateItem(item);
    } else {
      //this.todosService.getOneTodo(item._id)        .subscribe(todo => item.title = todo.title);
    }
  }

  drop(event: any) {
    if (event.previousIndex !== event.currentIndex) {
      const items = this.getItems();
      const pi = items[event.previousIndex]['i'];
      const ci = items[event.currentIndex]['i'];
      if (pi < ci) {
        if (ci < this.items.length - 1) {
          this.items[pi].order = (this.items[ci].order + this.items[ci + 1].order) / 2;
        } else {
          this.items[pi].order = this.items[ci].order + 64;
        }
      } else {
        if (ci > 0) {
          this.items[pi].order = (this.items[ci].order + this.items[ci - 1].order) / 2;
        } else {
          this.items[pi].order = this.items[ci].order - 64;
        }
      }
      this.updateItem(this.items[pi]);
      this.items.sort((a, b) => a.order - b.order);
    }
  }

  updateItem(item: Todo) {
    localStorage.setItem("toDO1", JSON.stringify(this.items));
  }

}

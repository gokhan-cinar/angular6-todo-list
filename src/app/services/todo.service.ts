import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    {
      text: 'Make 1',
      createdDate: new Date()
    },
    {
      text: 'Make 2',
      createdDate: new Date()
    }
  ];

  constructor() { }

  GetTodos() {
      return this.todos;
  }

  AddTodo(obj) {
    this.todos.push(obj);
  }

  RemoveTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}

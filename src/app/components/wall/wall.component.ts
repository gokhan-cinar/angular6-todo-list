import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  todos: Todo[];

  // Depencise injection constructor'ı kullanacaz burada
  constructor(private todoServices: TodoService) { }

  ngOnInit() {
    this.todos = this.todoServices.GetTodos();
  }

  AddTodo(todoText: HTMLInputElement) {
    const obj = {
        text: todoText.value,
        createdDate: new Date()
    };
    this.todoServices.AddTodo(obj);
    todoText.value = '';
  }
  Remove(todo) {
    this.todoServices.RemoveTodo(todo);
  }
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter()
  @Output() demo: EventEmitter<any> = new EventEmitter()

  constructor(private todosService: TodoService) { }

  ngOnInit() {
    // console.log(this)
  }

  // set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    }
    return classes
  }

  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed
    // toggle on server
    this.todosService.toggleCompleted(todo).subscribe(todo => console.log(todo))
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo)
  }

}

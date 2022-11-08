import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '@nx-angular/xplat/core';
import { TodoFacade, Todo } from '@nx-angular/xplat/features';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'client-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.scss'],
})
export class TodosComponent extends BaseComponent implements OnInit {
  todoNameFocusSubject: Subject<null> = new Subject();
  $todos: Observable<Todo[]>;
  constructor(private todoFacade: TodoFacade) {
    super();
    this.$todos = todoFacade.allTodos$;
  }

  ngOnInit(): void {
    this.todoFacade.loadAllTodos();
  }

  createTodo(todo: Todo) {
    this.todoFacade.createTodo(todo);
  }

  deleteTodo(todo: Todo) {
    this.todoFacade.deleteTodo(todo.id as number);
  }
}

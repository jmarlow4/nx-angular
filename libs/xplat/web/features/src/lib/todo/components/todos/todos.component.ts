import { Component } from '@angular/core';

import { BaseComponent } from '@nx-angular/xplat/core';
import { TodoFacade, Todo } from '@nx-angular/xplat/features';
import { Subject } from 'rxjs';

@Component({
  selector: 'web-todo',
  templateUrl: 'todos.component.html',
})
export class TodosComponent extends BaseComponent {
  todoNameFocusSubject: Subject<null> = new Subject();
  constructor(private todoFacade: TodoFacade) {
    super();
  }

  createList(todoList: Todo) {
    this.todoFacade.createTodo(todoList);
  }
}

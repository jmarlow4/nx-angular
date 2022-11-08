import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '@nx-angular/xplat/core';
import { Todo, TodoFacade } from '@nx-angular/xplat/features';
import { Observable, takeUntil } from 'rxjs';
import { AppTodoFacade } from '../../../../store/todo/app-todo.facade';

@Component({
  selector: 'client-todo-list',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.scss'],
})
export class TodoComponent extends BaseComponent implements OnInit {
  $todo: Observable<Todo | null>;

  constructor(
    private appTodoFacade: AppTodoFacade,
    private coreTodoFacade: TodoFacade,
  ) {
    super();
    this.$todo = this.appTodoFacade.todo$;
  }

  ngOnInit(): void {
    this.appTodoFacade.todoId$
      .pipe(takeUntil(this.destroy$))
      .subscribe((todoId: number) => {
        this.coreTodoFacade.loadTodo(todoId);
      });
  }
}

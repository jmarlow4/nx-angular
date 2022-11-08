import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { getRouterParamTodoId, getSelectedTodo } from './todo.selectors';

@Injectable()
export class AppTodoFacade {
  todo$ = this.store.select(getSelectedTodo);
  todoId$ = this.store
    .select(getRouterParamTodoId)
    .pipe(filter((todoId) => !!todoId));

  constructor(private readonly store: Store) {}
}

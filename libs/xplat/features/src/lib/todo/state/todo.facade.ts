import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as TodoActions from './todo.actions';
import { Todo } from './todo.models';
import * as TodoSelectors from './todo.selectors';

@Injectable()
export class TodoFacade {
  loaded$ = this.store.pipe(select(TodoSelectors.getTodoLoaded));
  allTodos$ = this.store.pipe(select(TodoSelectors.getAllTodo));

  constructor(private readonly store: Store) {}

  loadAllTodos() {
    this.store.dispatch(TodoActions.loadTodos());
  }

  loadTodo(todoId: number) {
    this.store.dispatch(TodoActions.loadTodo({ todoId }));
  }

  createTodo(todo: Todo) {
    this.store.dispatch(TodoActions.createTodo({ todo }));
  }

  deleteTodo(todoId: number) {
    this.store.dispatch(TodoActions.deleteTodo({ todoId }));
  }
}

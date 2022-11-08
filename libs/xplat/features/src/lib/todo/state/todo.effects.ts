import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  catchError,
  concatMap,
  filter,
  map,
  of,
  skipWhile,
  withLatestFrom,
} from 'rxjs';
import { AuthFacade } from '../../auth';
import { TodoService } from '../services/todo.service';

import * as TodoActions from './todo.actions';
import { Todo } from './todo.models';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      withLatestFrom(this.authFacade.userId$),
      concatMap(([_, userId]: [Action, string]) =>
        this.todoService.getAllTodos(userId).pipe(
          filter((todos: Todo[] | null) => !!todos),
          map((todos: Todo[] | null) => {
            return TodoActions.loadTodosSuccess({
              todos: todos as Todo[],
            });
          }),
          catchError((error) => of(TodoActions.loadTodosFailure({ error }))),
        ),
      ),
    );
  });

  loadTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodo),
      withLatestFrom(this.authFacade.userId$),
      concatMap(([{ todoId }, userId]) =>
        this.todoService.getTodo(todoId, userId).pipe(
          filter((Todo: Todo | null) => !!Todo),
          map((Todo: Todo | null) => {
            return TodoActions.loadTodosSuccess({
              todos: [Todo as Todo],
            });
          }),
          catchError((error) => of(TodoActions.loadTodosFailure({ error }))),
        ),
      ),
    );
  });

  createTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.createTodo),
      withLatestFrom(this.authFacade.userId$),
      concatMap(([{ todo }, userId]) =>
        this.todoService.create(todo, userId).pipe(
          map((Todo: Todo | null | undefined) => {
            return TodoActions.createTodoSuccess({
              todo: Todo as Todo,
            });
          }),
          catchError((error) => of(TodoActions.createTodoFailure({ error }))),
        ),
      ),
    );
  });

  deleteTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      concatMap(({ todoId }) =>
        this.todoService.delete(todoId).pipe(
          map(() => {
            return TodoActions.deleteTodoSuccess({
              todoId,
            });
          }),
          catchError((error) => of(TodoActions.deleteTodoFailure({ error }))),
        ),
      ),
    );
  });

  constructor(
    private readonly actions$: Actions,
    private todoService: TodoService,
    private authFacade: AuthFacade,
  ) {}
}

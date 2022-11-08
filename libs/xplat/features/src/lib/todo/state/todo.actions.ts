import { createAction, props } from '@ngrx/store';
import { PostgrestError } from '@supabase/supabase-js';
import { Todo } from './todo.models';

export const loadTodos = createAction('[Todo/API] Load Todos');
export const loadTodo = createAction(
  '[Todo/API] Load Todo',
  props<{ todoId: number }>(),
);

export const loadTodosSuccess = createAction(
  '[Todo/API] Load Todos Success',
  props<{ todos: Todo[] }>(),
);

export const loadTodosFailure = createAction(
  '[Todo/API] Load Todos Failure',
  props<{ error: PostgrestError }>(),
);

export const createTodo = createAction(
  '[Todo/API] Create Todo ',
  props<{ todo: Todo }>(),
);

export const createTodoSuccess = createAction(
  '[Todo/API] Create Todo Success',
  props<{ todo: Todo }>(),
);

export const createTodoFailure = createAction(
  '[Todo/API] Create Todo Failure',
  props<{ error: PostgrestError }>(),
);

export const deleteTodo = createAction(
  '[Todo/API] Delete Todo ',
  props<{ todoId: number }>(),
);

export const deleteTodoSuccess = createAction(
  '[Todo/API] Delete Todo Success',
  props<{ todoId: number }>(),
);

export const deleteTodoFailure = createAction(
  '[Todo/API] Delete Todo Failure',
  props<{ error: PostgrestError }>(),
);

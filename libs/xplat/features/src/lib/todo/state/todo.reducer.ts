import { createReducer, on, Action } from '@ngrx/store';
import produce from 'immer';
import * as TodoActions from './todo.actions';
import { initialTodoState, todoAdapter, TodoState } from './todo.state';

const reducer = createReducer(
  initialTodoState,
  on(TodoActions.loadTodo, (state) =>
    produce(state, (draftState: TodoState) => {
      draftState.pending = true;
    }),
  ),

  on(TodoActions.loadTodosSuccess, (state, { todos }) =>
    todoAdapter.setAll(todos, {
      ...state,
      loaded: true,
      pending: false,
    }),
  ),
  on(TodoActions.loadTodosFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    pending: false,
    error,
  })),

  on(TodoActions.createTodo, (state) =>
    produce(state, (draftState: TodoState) => {
      draftState.pending = true;
    }),
  ),

  on(TodoActions.createTodoSuccess, (state, { todo }) =>
    todoAdapter.addOne(todo, {
      ...state,
      pending: false,
    }),
  ),
  on(TodoActions.createTodoFailure, (state, { error }) => ({
    ...state,
    pending: false,
    error,
  })),

  on(TodoActions.deleteTodo, (state) =>
    produce(state, (draftState: TodoState) => {
      draftState.pending = true;
    }),
  ),

  on(TodoActions.deleteTodoSuccess, (state, { todoId }) =>
    todoAdapter.removeOne(todoId, {
      ...state,
      pending: false,
    }),
  ),
  on(TodoActions.deleteTodoFailure, (state, { error }) => ({
    ...state,
    pending: false,
    error,
  })),
);

export function todoReducer(state: TodoState | undefined, action: Action) {
  return reducer(state, action);
}

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODO_FEATURE_KEY, TodoState, todoAdapter } from './todo.state';

// Lookup the 'Todo' feature state managed by NgRx
export const getTodoState = createFeatureSelector<TodoState>(TODO_FEATURE_KEY);

const { selectAll, selectEntities } = todoAdapter.getSelectors();

export const getTodoLoaded = createSelector(
  getTodoState,
  (state: TodoState) => state.loaded,
);

export const getTodoError = createSelector(
  getTodoState,
  (state: TodoState) => state.error,
);

export const getAllTodo = createSelector(getTodoState, (state: TodoState) =>
  selectAll(state),
);

export const getTodoEntities = createSelector(
  getTodoState,
  (state: TodoState) => selectEntities(state),
);

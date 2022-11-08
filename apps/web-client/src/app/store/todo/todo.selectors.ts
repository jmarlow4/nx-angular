import { getTodoEntities, Todo } from '@nx-angular/xplat/features';
import { getMergedRoute } from '@nx-angular/xplat/web/core';
import { createSelector } from '@ngrx/store';

export const getRouterParamTodoId = createSelector(
  getMergedRoute,
  (mergedRoute) => mergedRoute.params['todoId'],
);

export const getSelectedTodo = createSelector(
  getTodoEntities,
  getRouterParamTodoId,
  (todos, id) => {
    return todos[id] as Todo;
  },
);

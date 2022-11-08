import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { PostgrestError } from '@supabase/supabase-js';
import { Todo } from './todo.models';

export const TODO_FEATURE_KEY = 'todo';

export interface TodoState extends EntityState<Todo> {
  loaded: boolean;
  pending: boolean; // is it currently loading
  error?: PostgrestError | undefined; // last known error (if any)
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialTodoState: TodoState = todoAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  pending: false,
});

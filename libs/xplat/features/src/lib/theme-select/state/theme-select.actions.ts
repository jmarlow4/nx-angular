import { createAction, props } from '@ngrx/store';

export const selectTheme = createAction(
  '[Theme-Select] select theme',
  props<{ theme: 'light' | 'dark' }>(),
);

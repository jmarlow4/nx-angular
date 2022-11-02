import { createAction, props } from '@ngrx/store';

export const setSidenav = createAction(
  '[Layout] Set Sidenav',
  props<{ isOpen: boolean }>(),
);

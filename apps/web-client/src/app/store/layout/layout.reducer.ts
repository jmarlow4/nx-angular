import { Action, createReducer, on } from '@ngrx/store';
import * as LayoutActions from './layout.actions';

export const layoutFeatureKey = 'layout';

export interface LayoutState {
  sidenavIsOpen: boolean;
}

export const initialState: LayoutState = {
  sidenavIsOpen: true,
};

export const reducer = createReducer(
  initialState,

  on(LayoutActions.setSidenav, (state, action) => ({
    sidenavIsOpen: action.isOpen,
  })),
);

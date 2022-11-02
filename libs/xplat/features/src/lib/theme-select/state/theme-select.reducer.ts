import { createReducer, on, Action } from '@ngrx/store';
import { selectTheme } from './theme-select.actions';
import {
  initialThemeSelectState,
  ThemeSelectState,
} from './theme-select.state';
import produce from 'immer';

const reducer = createReducer(
  initialThemeSelectState,
  on(selectTheme, (state, { theme }) =>
    produce(state, (draftState) => {
      draftState.theme = theme;
    }),
  ),
);

export function themeSelectReducer(
  state: ThemeSelectState | undefined,
  action: Action,
) {
  return reducer(state, action);
}

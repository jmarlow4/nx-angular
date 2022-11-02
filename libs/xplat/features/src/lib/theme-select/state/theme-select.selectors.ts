import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ThemeSelectState,
  THEME_SELECT_FEATURE_KEY,
} from './theme-select.state';

export const getThemeSelectState = createFeatureSelector<ThemeSelectState>(
  THEME_SELECT_FEATURE_KEY,
);

export const getSelectedTheme = createSelector(
  getThemeSelectState,
  (state: ThemeSelectState) => state.theme,
);

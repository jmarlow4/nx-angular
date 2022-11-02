import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLayout from './layout.reducer';

export const selectLayoutState = createFeatureSelector<fromLayout.LayoutState>(
  fromLayout.layoutFeatureKey,
);

export const selectIsSidenavOpen = createSelector(
  selectLayoutState,
  (state: fromLayout.LayoutState) => {
    return state.sidenavIsOpen;
  },
);

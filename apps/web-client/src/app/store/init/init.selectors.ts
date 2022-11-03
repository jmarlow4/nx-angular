import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInit from './init.reducer';

export const selectInitState = createFeatureSelector<fromInit.InitState>(
  fromInit.initFeatureKey
);

export const selectInit = createSelector(
  selectInitState,
  (initState: fromInit.InitState) => {
    return initState.initialized;
  }
);

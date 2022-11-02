import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromInit from './init/init.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';
import {
  themeSelectReducer,
  ThemeSelectState,
  THEME_SELECT_FEATURE_KEY,
} from '@nx-angular/xplat/features';
import { routerReducer, RouterState } from '@ngrx/router-store';

export interface RootState {
  [fromInit.initFeatureKey]: fromInit.InitState;
  [THEME_SELECT_FEATURE_KEY]: ThemeSelectState;
  router: RouterState;
}

export const reducers: ActionReducerMap<RootState> = {
  [fromInit.initFeatureKey]: fromInit.reducer,
  [THEME_SELECT_FEATURE_KEY]: themeSelectReducer,
  router: routerReducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<RootState>
): ActionReducer<RootState> {
  return localStorageSync({ keys: ['theme'], rehydrate: true })(reducer);
}

export const metaReducers: MetaReducer<RootState>[] = !environment.production
  ? [localStorageSyncReducer]
  : [localStorageSyncReducer];

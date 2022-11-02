import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import { initApp, initAppSuccess, initAppFailure } from './init.actions';

export const initFeatureKey = 'init';

export interface InitState {
  initialized: boolean;
  pending: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: InitState = {
  initialized: false,
  pending: false,
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(initApp, (state) => ({
    initialized: false,
    pending: true,
    error: null,
  })),
  on(initAppSuccess, (state, action) => ({
    initialized: action.initialized,
    pending: false,
    error: null,
  })),
  on(initAppFailure, (state, action) => ({
    initialized: action.initialized,
    pending: false,
    error: action.error,
  })),
);

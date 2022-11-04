import { createReducer, on, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.initAuth, (state) => ({
    ...state,
    loaded: false,
    pending: true,
  })),
  on(AuthActions.initAuthSuccess, (state, { user, session }) => ({
    ...state,
    initialized: true,
    loaded: false,
    error: null,
    user,
    session,
  })),
  on(AuthActions.initAuthFailure, (state, { error }) => ({
    ...state,
    initialized: true,
    loaded: false,
    user: null,
    error,
  })),
  on(AuthActions.login || AuthActions.register, (state) => ({
    ...state,
    loaded: false,
    pending: true,
    error: null,
  })),
  on(AuthActions.loginSuccess, (state, { user, session }) => ({
    ...state,
    loaded: false,
    error: null,
    user,
    session,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    user: null,
    error: error,
  })),
  on(AuthActions.logout, (state) => ({
    ...state,
    pending: true,
    error: null,
  })),
  on(AuthActions.logoutSuccess, (state) => ({
    ...state,
    loaded: false,
    error: null,
    user: null,
  })),
  on(AuthActions.logoutFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    error: error,
  })),
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}

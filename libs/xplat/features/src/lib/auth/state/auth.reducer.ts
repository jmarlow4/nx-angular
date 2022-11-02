import { createReducer, on, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.initAuth, (state) => ({
    ...state,
    loaded: false,
    pending: true,
    sessionError: null,
    userError: null,
  })),
  on(AuthActions.initAuthSuccess, (state, { user, session }) => ({
    ...state,
    initialized: true,
    loaded: false,
    error: null,
    user,
    session,
    sessionError: null,
    userError: null,
  })),
  on(AuthActions.initAuthFailure, (state, { userError, sessionError }) => ({
    ...state,
    initialized: true,
    loaded: false,
    user: null,
    sessionError,
    userError,
  })),
  on(AuthActions.login || AuthActions.register, (state) => ({
    ...state,
    loaded: false,
    pending: true,
    authError: null,
  })),
  on(AuthActions.loginSuccess, (state, { user, session }) => ({
    ...state,
    loaded: false,
    authError: null,
    user,
    session,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    user: null,
    authError: error,
  })),
  on(AuthActions.logout, (state) => ({
    ...state,
    pending: true,
    authError: null,
  })),
  on(AuthActions.logoutSuccess, (state) => ({
    ...state,
    loaded: false,
    authError: null,
    user: null,
  })),
  on(AuthActions.logoutFailure, (state, { error }) => ({
    ...state,
    loaded: false,
    authError: error,
  })),
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}

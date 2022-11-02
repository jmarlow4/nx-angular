import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, AUTH_FEATURE_KEY } from './auth.state';

// Lookup the 'Auth' feature state managed by NgRx
export const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const getAuthInitialized = createSelector(
  getAuthState,
  (state: AuthState) => state.initialized
);

export const getAuthLoaded = createSelector(
  getAuthState,
  (state: AuthState) => state.loaded
);

export const getAuthError = createSelector(
  getAuthState,
  (state: AuthState) => state.authError
);

export const getAuthUser = createSelector(
  getAuthState,
  (state: AuthState) => state.user
);

export const getAuthSession = createSelector(
  getAuthState,
  (state: AuthState) => state.session
);

export const getInitUserError = createSelector(
  getAuthState,
  (state: AuthState) => state.userError
);

export const getInitSessionError = createSelector(
  getAuthState,
  (state: AuthState) => state.sessionError
);

export const getAuthPending = createSelector(
  getAuthState,
  (state: AuthState) => state.pending
);

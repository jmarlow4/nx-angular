import { createAction, props } from '@ngrx/store';
import { AuthError, Session, User } from '@supabase/supabase-js';

export const initAuth = createAction('[Auth/API] Init Auth');
export const initAuthNull = createAction('[Auth/API] Init Auth');
export const initAuthSuccess = createAction(
  '[Auth/API] Init Auth Success',
  props<{ user: User; session: Session }>()
);
export const initAuthFailure = createAction(
  '[Auth/API] Init Auth Error',
  props<{ userError: AuthError; sessionError: AuthError }>()
);

export const login = createAction(
  '[Auth/API] Login',
  props<{ email: string; password: string }>()
);

export const register = createAction(
  '[Auth/API] Register',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth/API] Login Success',
  props<{ user: User; session: Session }>()
);

export const loginFailure = createAction(
  '[Auth/API] Login Failure',
  props<{ error: AuthError }>()
);

export const logout = createAction('[Auth/API] Logout');

export const logoutSuccess = createAction('[Auth/API] Logout Success');

export const logoutFailure = createAction(
  '[Auth/API] Logout Failure',
  props<{ error: AuthError }>()
);

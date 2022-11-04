import { AuthError, Session, User } from '@supabase/supabase-js';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  initialized: boolean;
  pending: boolean;
  loaded: boolean;
  user: User | null;
  session: Session | null;
  error: AuthError | null;
}

export const initialAuthState: AuthState = {
  initialized: false,
  pending: false,
  loaded: false,
  user: null,
  session: null,
  error: null,
};

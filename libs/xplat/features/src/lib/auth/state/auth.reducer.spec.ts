import { Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { authReducer } from './auth.reducer';
import { AuthState, initialAuthState } from './auth.state';

fdescribe('Auth Reducer', () => {
  describe('valid Auth actions', () => {
    it('initAuth should modify state indicating auth initialization', () => {
      const action = AuthActions.initAuth();

      const result: AuthState = authReducer(initialAuthState, action);

      expect(result.loaded).toBe(false);
      expect(result.pending).toBe(true);
      expect(result.sessionError).toBe(null);
      expect(result.userError).toBe(null);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = authReducer(initialAuthState, action);

      expect(result).toBe(initialAuthState);
    });
  });
});

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  initialized$ = this.store.pipe(select(AuthSelectors.getAuthInitialized));
  loaded$ = this.store.pipe(select(AuthSelectors.getAuthLoaded));
  user$ = this.store.pipe(select(AuthSelectors.getAuthUser));
  pending$ = this.store.pipe(select(AuthSelectors.getAuthPending));
  error$ = this.store.pipe(select(AuthSelectors.getAuthError));
  userError$ = this.store.pipe(select(AuthSelectors.getInitUserError));
  sessionError$ = this.store.pipe(select(AuthSelectors.getInitSessionError));

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(AuthActions.initAuth());
  }

  login(creds: { email: string; password: string }) {
    this.store.dispatch(AuthActions.login(creds));
  }

  register(creds: { email: string; password: string }) {
    this.store.dispatch(AuthActions.register(creds));
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}

import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { AuthResponse, Session, User } from '@supabase/supabase-js';
import { catchError, concatMap, filter, map, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.initAuth),
      concatMap(() =>
        this.auth.init().pipe(
          map(({ userData, sessionData, userError, sessionError }) => {
            if (userData && sessionData) {
              return AuthActions.initAuthSuccess({
                user: userData,
                session: sessionData,
              });
            } else {
              if (userError && sessionError) {
                return AuthActions.initAuthFailure({ userError, sessionError });
              } else {
                return AuthActions.initAuthNull();
              }
            }
          })
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      concatMap((creds: { email: string; password: string }) =>
        this.auth.login(creds).pipe(
          filter((res: AuthResponse) => !!(res.data.user && res.data.session)),
          map((res: AuthResponse) =>
            AuthActions.loginSuccess({
              user: res.data.user as User,
              session: res.data.session as Session,
            })
          ),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      concatMap((creds: { email: string; password: string }) =>
        this.auth.register(creds).pipe(
          filter((res: AuthResponse) => !!(res.data.user && res.data.session)),
          map((res: AuthResponse) =>
            AuthActions.loginSuccess({
              user: res.data.user as User,
              session: res.data.session as Session,
            })
          ),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      concatMap(() =>
        this.auth.logOut().pipe(
          map(() => AuthActions.logoutSuccess()),
          catchError((error) => of(AuthActions.logoutFailure({ error })))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly auth: AuthService
  ) {}
}
// https://nrwzdxludreygmeecllg.supabase.co/auth/v1/verify?token=5c7cd273341b3f553e73bdaed00c46f18dc52c26ab61a26a81ebe532&type=signup&redirect_to=http://localhost:4200/

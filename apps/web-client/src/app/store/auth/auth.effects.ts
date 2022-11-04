import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from '@nx-angular/xplat/features';
import { tap } from 'rxjs';

@Injectable()
export class AppAuthEffects {
  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(() => {
          this.router.navigateByUrl('/');
        }),
      ),
    { dispatch: false },
  );

  logoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logoutSuccess),
        tap(() => {
          this.router.navigateByUrl('/auth/login');
        }),
      ),
    { dispatch: false },
  );

  initFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.initAuthFailure),
        tap(() => {
          this.router.navigateByUrl('/auth/login');
        }),
      ),
    { dispatch: false },
  );

  constructor(private readonly actions$: Actions, private router: Router) {}
}

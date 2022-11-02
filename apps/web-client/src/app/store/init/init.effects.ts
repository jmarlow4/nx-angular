import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { initApp, initAppSuccess, initAppFailure } from './init.actions';
import { AuthFacade } from '@nx-angular/xplat/features';

@Injectable()
export class InitEffects {
  loadInits$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(initApp),
      concatMap(() =>
        of(true).pipe(
          // tap(() => this.authFacade.init()),
          map(() => initAppSuccess({ initialized: true })),
          catchError((error) =>
            of(initAppFailure({ initialized: false, error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private authFacade: AuthFacade) {}
}

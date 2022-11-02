import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const initApp = createAction('[Init] Initialize App');

export const initAppSuccess = createAction(
  '[Init] Initialize App Success',
  props<{ initialized: boolean }>()
);

export const initAppFailure = createAction(
  '[Init] Initialize App Failure',
  props<{ initialized: boolean; error: HttpErrorResponse }>()
);

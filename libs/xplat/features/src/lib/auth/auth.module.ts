import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './state/auth.reducer';
import { AuthEffects } from './state/auth.effects';
import { AuthFacade } from './state/auth.facade';
import { AuthService } from './services/auth.service';
import { AUTH_FEATURE_KEY } from './state/auth.state';

@NgModule({
  providers: [AuthService, AuthFacade],
  imports: [
    StoreModule.forFeature(AUTH_FEATURE_KEY, fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}

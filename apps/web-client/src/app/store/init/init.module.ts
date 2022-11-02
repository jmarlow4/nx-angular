import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import * as fromInit from './init.reducer';
import { EffectsModule } from '@ngrx/effects';
import { InitEffects } from './init.effects';
import { initFactory } from './init.factory';
import { AuthModule } from '@nx-angular/xplat/features';

@NgModule({
  imports: [
    AuthModule,
    StoreModule.forFeature(fromInit.initFeatureKey, fromInit.reducer),
    EffectsModule.forFeature([InitEffects]),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      deps: [Store],
      multi: true,
    },
  ],
})
export class InitModule {}

import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { AppAuthEffects } from './auth.effects';

@NgModule({
  imports: [EffectsModule.forFeature([AppAuthEffects])],
})
export class AppAuthStoreModule {}

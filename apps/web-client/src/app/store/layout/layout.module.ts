import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromLayout from './layout.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromLayout.layoutFeatureKey, fromLayout.reducer),
  ],
})
export class LayoutStateModule {}

import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { themeSelectReducer } from './state/theme-select.reducer';

import { initialThemeSelectState } from './state/theme-select.state';

@NgModule({
  imports: [
    StoreModule.forFeature('themeSelect', themeSelectReducer, {
      initialState: initialThemeSelectState,
    }),
  ],
})
export class ThemeSelectModule {}

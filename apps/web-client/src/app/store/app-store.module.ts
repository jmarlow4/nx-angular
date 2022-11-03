import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './root.reducer';
import { InitModule } from './init/init.module';
import { LayoutStateModule } from './layout/layout.module';
import { environment } from '@nx-angular/xplat/core';
import { ThemeSelectModule } from '@nx-angular/xplat/features';
import { NgrxRouterStoreModule } from '@nx-angular/xplat/web/core';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgrxRouterStoreModule,
    InitModule,
    LayoutStateModule,
    ThemeSelectModule,
  ],
})
export class AppStoreModule {}

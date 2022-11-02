import { NgModule, Optional, Self } from '@angular/core';
import {
  routerReducer,
  RouterStateSerializer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { MergedRouterStateSerializer } from './merged-route-serializer';
import { Router } from '@angular/router';

/* Credit where its due:
  https://medium.com/simars/ngrx-router-store-reduce-select-route-params-6baff607dd9
*/

export const routerStateConfig = {
  stateKey: 'router',
};

@NgModule({
  imports: [
    StoreModule.forFeature(routerStateConfig.stateKey, routerReducer),
    StoreRouterConnectingModule.forRoot(routerStateConfig),
  ],
  exports: [StoreModule, StoreRouterConnectingModule],
  providers: [
    {
      provide: RouterStateSerializer,
      useClass: MergedRouterStateSerializer,
    },
  ],
})
export class NgrxRouterStoreModule {
  constructor(@Self() @Optional() router: Router) {
    if (!router) {
      console.error(
        'NgrxRouterStoreModule must be imported in the same same level as RouterModule',
      );
    }
  }
}

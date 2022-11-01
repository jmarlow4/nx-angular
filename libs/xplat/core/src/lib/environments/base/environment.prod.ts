import { IEnvironment } from '@nx-angular/xplat/core';
import { deepMerge } from '@nx-angular/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});

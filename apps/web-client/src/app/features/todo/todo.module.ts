import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TODO_COMPONENTS } from './components';

@NgModule({
  imports: [SharedModule],
  declarations: [...TODO_COMPONENTS],
  exports: [...TODO_COMPONENTS],
})
export class TodoModule {}

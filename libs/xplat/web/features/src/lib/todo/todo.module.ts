import { NgModule } from '@angular/core';
import { CoreTodoModule } from '@nx-angular/xplat/features';
import { UIModule } from '../ui/ui.module';
import { TODO_COMPONENTS } from './components';

@NgModule({
  imports: [CoreTodoModule, UIModule],
  declarations: [...TODO_COMPONENTS],
  exports: [...TODO_COMPONENTS],
})
export class WebTodoModule {}

import { NgModule } from '@angular/core';
import { TodoModule as SharedTodoModule } from '@nx-angular/xplat/features';
import { UIModule } from '../ui/ui.module';
import { TODO_COMPONENTS } from './components';

@NgModule({
  imports: [SharedTodoModule, UIModule],
  declarations: [...TODO_COMPONENTS],
  exports: [...TODO_COMPONENTS],
})
export class TodoModule {}

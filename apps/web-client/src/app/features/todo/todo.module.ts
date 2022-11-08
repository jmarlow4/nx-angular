import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebTodoModule } from '@nx-angular/xplat/web/features';

import { SharedModule } from '../shared/shared.module';
import { TodoComponent, TodosComponent, TODO_COMPONENTS } from './components';

export const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
  {
    path: ':todoId',
    component: TodoComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), WebTodoModule],
  declarations: [...TODO_COMPONENTS],
  exports: [...TODO_COMPONENTS],
})
export class TodoModule {}

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTodo from './state/todo.reducer';
import { TodoEffects } from './state/todo.effects';
import { TodoFacade } from './state/todo.facade';
import { TODO_FEATURE_KEY } from './state';
import { TodoService } from './services/todo.service';

@NgModule({
  providers: [TodoFacade, TodoService],
  imports: [
    StoreModule.forFeature(TODO_FEATURE_KEY, fromTodo.todoReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class CoreTodoModule {}

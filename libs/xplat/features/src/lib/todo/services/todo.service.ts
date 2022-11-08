import { Injectable } from '@angular/core';
import { SupabaseService } from '@nx-angular/xplat/core';
import {
  PostgrestResponse,
  PostgrestSingleResponse,
} from '@supabase/supabase-js';
import { from, map, Observable } from 'rxjs';
import { Todo } from '../state/todo.models';

@Injectable()
export class TodoService {
  constructor(private sb: SupabaseService) {}

  getAllTodos(userId: string): Observable<Todo[] | null> {
    return from(
      this.sb.client.from('todos').select(`*`).eq('userId', userId),
    ).pipe(
      map((res: PostgrestResponse<Todo>) => {
        console.log({ res });
        return res.data;
      }),
    );
  }

  getTodo(todoId: number, userId: string): Observable<Todo | null> {
    return from(
      this.sb.client
        .from('todos')
        .select(`*`)
        .eq('userId', userId)
        .eq('id', todoId)
        .single(),
    ).pipe(
      map((res: PostgrestSingleResponse<Todo | null>) => {
        return res.data;
      }),
    );
  }

  create(todo: Todo, userId: string): Observable<Todo | null | undefined> {
    return from(
      this.sb.client
        .from('todos')
        .insert({ ...todo, userId })
        .select()
        .single(),
    ).pipe(
      map((res: PostgrestSingleResponse<Todo | null | undefined>) => {
        console.log({ res });
        return res.data;
      }),
    );
  }

  delete(todoId: number): Observable<any> {
    return from(this.sb.client.from('todos').delete().eq('id', todoId)).pipe(
      map((res: PostgrestResponse<any>) => {
        console.log({ res });
        return res.data;
      }),
    );
  }
}

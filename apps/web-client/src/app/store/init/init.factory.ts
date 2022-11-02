import { Store } from '@ngrx/store';
import { initApp } from './init.actions';
import { InitState } from './init.reducer';

export function initFactory(store: Store<InitState>): () => void {
  return () => store.dispatch(initApp());
}

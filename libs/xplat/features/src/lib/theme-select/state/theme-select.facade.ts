import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectTheme } from './theme-select.actions';
import { getSelectedTheme } from './theme-select.selectors';

@Injectable()
export class ThemeSelectFacade {
  theme$ = this.store.pipe(select(getSelectedTheme));

  constructor(private readonly store: Store) {}

  selectTheme(theme: 'light' | 'dark') {
    this.store.dispatch(selectTheme({ theme }));
  }
}

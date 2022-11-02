import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { AuthFacade } from '@nx-angular/xplat/features';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';

import { InitEffects } from './init.effects';
import { initialState } from './init.reducer';

describe('InitEffects', () => {
  let actions$: Observable<any>;
  let effects: InitEffects;
  let store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InitEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: initialState }),
        AuthFacade,
      ],
    });

    store = TestBed.inject(MockStore);
    effects = TestBed.inject(InitEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InitEffects } from './init.effects';

describe('InitEffects', () => {
  let actions$: Observable<any>;
  let effects: InitEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(InitEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

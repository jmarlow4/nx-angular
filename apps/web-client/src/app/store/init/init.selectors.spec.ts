import * as fromInit from './init.reducer';
import { selectInitState } from './init.selectors';

describe('Init Selectors', () => {
  it('should select the feature state', () => {
    const result = selectInitState({
      [fromInit.initFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});

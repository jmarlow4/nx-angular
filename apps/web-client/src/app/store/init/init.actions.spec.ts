import * as fromInit from './init.actions';

describe('loadInits', () => {
  it('should return an action', () => {
    expect(fromInit.loadInits().type).toBe('[Init] Load Inits');
  });
});

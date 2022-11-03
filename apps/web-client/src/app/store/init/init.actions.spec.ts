import * as fromInit from './init.actions';

describe('loadInits', () => {
  it('should return an action', () => {
    expect(fromInit.initApp().type).toBe('[Init] Initialize App');
  });
});

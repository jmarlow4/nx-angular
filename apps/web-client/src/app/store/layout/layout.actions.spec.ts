import * as fromLayout from './layout.actions';

describe('loadLayouts', () => {
  it('should return an action', () => {
    expect(fromLayout.setSidenav({ isOpen: true }).type).toBe(
      '[Layout] Set Sidenav'
    );
  });
});

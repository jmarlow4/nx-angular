import * as ThemeSelectActions from './theme-select.actions';
import { themeSelectReducer } from './theme-select.reducer';
import * as ThemeSelectState from './theme-select.state';

describe('theme-selectReducer', () => {
  it('should work', () => {
    const action = ThemeSelectActions.selectTheme({ theme: 'dark' });
    const actual = themeSelectReducer(
      ThemeSelectState.initialThemeSelectState,
      action
    );
    expect(actual).toEqual({ theme: 'dark' });
  });
});

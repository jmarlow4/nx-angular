import { ThemeSelectActions } from './theme-select.actions';
import { themeSelectReducer } from './theme-select.reducer';
import { ThemeSelectState } from './theme-select.state';

describe('theme-selectReducer', () => {
  it('should work', () => {
    const action = ThemeSelectActions.loaded({});
    const actual = themeSelectReducer(ThemeSelectState.initialState, action);
    expect(actual).toEqual({});
  });
});

export const THEME_SELECT_FEATURE_KEY = 'theme';

export interface ThemeSelectState {
  theme: 'light' | 'dark';
}

export const initialThemeSelectState: ThemeSelectState = {
  theme: 'light',
};

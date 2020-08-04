import DEFAULT_THEME from './theme';

describe('DEFAULT_THEME', () => {
  test('matches snapshot', () => {
    expect({
      ...DEFAULT_THEME,
      shadows: {
        sm: DEFAULT_THEME.shadows.sm(),
        md: DEFAULT_THEME.shadows.md(),
        lg: DEFAULT_THEME.shadows.lg()
      },
      borders: {
        sm: DEFAULT_THEME.borders.sm(),
        md: DEFAULT_THEME.borders.md()
      }
    }).toMatchSnapshot();
  });
});

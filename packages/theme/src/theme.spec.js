import DEFAULT_THEME from "./theme";

describe("DEFAULT_THEME", () => {
  test("matches snapshot", () => {
    expect({
      ...DEFAULT_THEME,
      shadows: {
        lg: DEFAULT_THEME.shadows.lg(),
        md: DEFAULT_THEME.shadows.md(),
        sm: DEFAULT_THEME.shadows.sm()
      },
      // eslint-disable-next-line sort-keys
      borders: {
        md: DEFAULT_THEME.borders.md(),
        sm: DEFAULT_THEME.borders.sm()
      }
    }).toMatchSnapshot();
  });
});

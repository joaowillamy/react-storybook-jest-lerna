import React from "react";
import { ThemeProvider } from "styled-components";

import DEFAULT_THEME from "./theme";
import { GlobalStyles } from "./GlobalStyles";

const JoaowillamyTestQueroThemeProvider = ({ theme, children, ...other }) => {
  return (
    <ThemeProvider theme={theme} {...other}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

JoaowillamyTestQueroThemeProvider.defaultProps = {
  theme: DEFAULT_THEME
};

export default JoaowillamyTestQueroThemeProvider;

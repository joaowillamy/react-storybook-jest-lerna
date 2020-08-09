import React from "react";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Menu from ".";

export default {
  component: Menu,
  title: "Core|Menu"
};

export const menu = () => (
  <ThemeProvider>
    <Menu />
  </ThemeProvider>
);

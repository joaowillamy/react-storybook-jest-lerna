import React from "react";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Header from ".";

export default {
  component: Header,
  title: "Core|Header"
};

export const defaultHeader = () => (
  <ThemeProvider>
    <Header>{"Header"}</Header>
  </ThemeProvider>
);

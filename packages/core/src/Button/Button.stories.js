import React from "react";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Button from ".";

export default {
  component: Button,
  title: "Core|Button"
};

export const primary = () => (
  <ThemeProvider>
    <Button>{"Button"}</Button>
  </ThemeProvider>
);

export const secondary = () => (
  <ThemeProvider>
    <Button variant="secondary">{"Button"}</Button>
  </ThemeProvider>
);

export const disabled = () => (
  <ThemeProvider>
    <Button disabled>{"Button"}</Button>
  </ThemeProvider>
);

import React from "react";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Breadcrumb from ".";

export default {
  component: Breadcrumb,
  title: "Core|Breadcrumb"
};

export const breadcrumb = () => (
  <ThemeProvider>
    <Breadcrumb>{"Breadcrumb"}</Breadcrumb>
  </ThemeProvider>
);

import React from "react";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Footer from ".";

export default {
  component: Footer,
  title: "Core|Footer"
};

export const footer = () => (
  <ThemeProvider>
    <Footer />
  </ThemeProvider>
);

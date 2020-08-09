import React from "react";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Card from ".";

export default {
  component: Card,
  title: "Core|Card"
};

export const card = () => (
  <ThemeProvider>
    <Card>
      <img
        src={"https://via.placeholder.com/885x307"}
        alt={"Logo quero bolsa"}
      />
      oi
    </Card>
  </ThemeProvider>
);

export const cardWithouHover = () => (
  <ThemeProvider>
    <Card hover={false}>
      <img
        src={"https://via.placeholder.com/885x307"}
        alt={"Logo quero bolsa"}
      />
      oi
    </Card>
  </ThemeProvider>
);

import React from "react";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Rate from ".";

export default {
  component: Rate,
  title: "form|Rate"
};

export const rate = () => {
  return (
    <ThemeProvider>
      <div>
        <Rate value={0} />
      </div>
      <div>
        <Rate value={0.5} />
      </div>
      <div>
        <Rate value={1} />
      </div>
    </ThemeProvider>
  );
};

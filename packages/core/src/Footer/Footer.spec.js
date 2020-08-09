import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Footer from ".";

describe("Footer", () => {
  test("Footer", () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <Footer />
        </ThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

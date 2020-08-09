import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Header from ".";

describe("Header", () => {
  test("Header", () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Menu from ".";

describe("Menu", () => {
  test("Menu", () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <Menu />
        </ThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Range from ".";

describe("Range", () => {
  test("Range", () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <Range />
        </ThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Checkbox from ".";

describe("Checkbox", () => {
  test("Checkbox", () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <Checkbox />
        </ThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

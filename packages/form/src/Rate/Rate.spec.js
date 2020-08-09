import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Rate from ".";

describe("Rate", () => {
  test("Rate", () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <Rate value={0.5} />
        </ThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

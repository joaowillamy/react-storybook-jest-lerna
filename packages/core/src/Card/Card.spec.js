import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Card from ".";

describe("Card", () => {
  test("primary", () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <Card>{"Test"}</Card>
        </ThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

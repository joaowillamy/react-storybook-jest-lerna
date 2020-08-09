import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Button from ".";

describe("Button", () => {
  test("primary", () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <Button>{"Test"}</Button>
        </ThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("secondary", () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <Button variant="secondary">{"Test"}</Button>
        </ThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

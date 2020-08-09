import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Breadcrumb from ".";

describe("Breadcrumb", () => {
  test("primary", () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <Breadcrumb>{"Test"}</Breadcrumb>
        </ThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

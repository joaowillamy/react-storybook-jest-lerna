import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import ButtonGroup from ".";

describe("ButtonGroup", () => {
  test("primary", () => {
    const tree = renderer.create(<ButtonGroup>{"Test"}</ButtonGroup>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

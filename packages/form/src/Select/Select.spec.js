import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Select from ".";

describe("Select", () => {
  test("Select", () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <Select
            labelField={"name"}
            options={[
              {
                id: "ea304469-3d25-4b33-967b-9740ab7e910f",
                name: "Madge Casper"
              },
              {
                id: "ea30446asd9-3d25-4b33-967b-9740ab7e910f",
                name: "Joao"
              }
            ]}
            valueField={"id"}
          />
        </ThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

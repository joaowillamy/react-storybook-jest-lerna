import React from "react";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import Select from ".";

export default {
  component: Select,
  title: "form|Select"
};

export const select = () => {
  return (
    <ThemeProvider>
      <Select
        labelField={"name"}
        // eslint-disable-next-line no-console
        onChange={values => console.log(values)}
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
  );
};

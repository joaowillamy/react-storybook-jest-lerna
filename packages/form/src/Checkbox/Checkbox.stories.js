import React from "react";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";
import { Card } from "@joaowillamy-test-quero/core";

import Checkbox from ".";

export default {
  component: Checkbox,
  title: "form|Checkbox"
};

export const checkbox = () => {
  return (
    <ThemeProvider>
      <div style={{ width: "100px", display: "inline-block" }}>
        <Checkbox
          label={<>oi</>}
          name={"checkbox"}
          value={{ a: 2, b: [1, 2] }}
          onChange={data => {
            console.log(data);
          }}
        />
      </div>
      <div style={{ width: "100px", display: "inline-block" }}>
        <Checkbox
          label={<>oi</>}
          name={"checkbox"}
          isSelected={true}
          value={{ a: 2, b: [1, 2] }}
          onChange={data => {
            console.log(data);
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export const checkboxElements = () => {
  return (
    <ThemeProvider>
      <Checkbox
        label={
          <>
            <Card />
          </>
        }
        name={"checkbox"}
        value={{ a: 2, b: [1, 2] }}
        onChange={data => {
          console.log(data);
        }}
      />
    </ThemeProvider>
  );
};

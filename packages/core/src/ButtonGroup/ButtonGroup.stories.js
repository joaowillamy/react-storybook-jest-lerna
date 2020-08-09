import React from "react";
import { ThemeProvider } from "@joaowillamy-test-quero/theme";

import ButtonGroup from ".";

export default {
  component: ButtonGroup,
  title: "Core|ButtonGroup"
};

export const buttonGroup = () => (
  <ThemeProvider>
    <ButtonGroup
      options={[
        { label: "Todos os semestres", value: "all" },
        { label: "2º semestre de 2019", value: "second" },
        { label: "1º semestre de 2020", value: "first" }
      ]}
      onChange={option => console.log("option", option)}
    ></ButtonGroup>
  </ThemeProvider>
);

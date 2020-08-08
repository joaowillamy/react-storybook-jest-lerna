import React from 'react';
import { ThemeProvider } from '@joaowillamy-test-quero/theme';

import Range from '.';

export default {
  component: Range,
  title: 'form|Range'
};

export const range = () => {
  return (
    <ThemeProvider>
      <Range
        value={100}
        label={'ATÉ QUANTO PODE PAGAR?'}
        onChange={(data) => {}}
      />
    </ThemeProvider>
  );
};

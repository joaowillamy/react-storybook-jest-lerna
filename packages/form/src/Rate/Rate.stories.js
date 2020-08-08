import React from 'react';
import { ThemeProvider } from '@joaowillamy-test-quero/theme';

import Rate from '.';

export default {
  component: Rate,
  title: 'form|Rate'
};

export const rate = () => {
  return (
    <ThemeProvider>
      <Rate value={0} />
      <Rate value={0.5} />
      <Rate value={0.6} />
      <Rate value={1.5} />
      <Rate value={1.6} />
      <Rate value={2.5} />
      <Rate value={2.6} />
      <Rate value={3.5} />
      <Rate value={3.6} />
      <Rate value={4.5} />
      <Rate value={4.6} />
    </ThemeProvider>
  );
};

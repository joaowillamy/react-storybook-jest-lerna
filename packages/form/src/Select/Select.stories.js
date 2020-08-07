import React from 'react';
import { ThemeProvider } from '@joaowillamy-test-quero/theme';

import Select from '.';

export default {
  component: Select,
  title: 'form|Select'
};

export const select = () => {
  return (
    <ThemeProvider>
      <div
        style={{
          width: '200px',
          display: 'inline-block',
          margin: '5px'
        }}
      >
        <Select
          labelField={'name'}
          valueField={'id'}
          options={[
            {
              id: 'ea304469-3d25-4b33-967b-9740ab7e910f',
              name: 'Madge Casper'
            },
            {
              id: 'ea30446asd9-3d25-4b33-967b-9740ab7e910f',
              name: 'Joao'
            }
          ]}
          onChange={(values) => console.log(values)}
        />
      </div>
      <div
        style={{
          width: '200px',
          display: 'inline-block',
          margin: '5px'
        }}
      >
        <Select
          labelField={'name'}
          valueField={'id'}
          options={[
            {
              id: 'ea304469-3d25-4b33-967b-9740ab7e910f',
              name: 'Madge Casper'
            },
            {
              id: 'ea30446asd9-3d25-4b33-967b-9740ab7e910f',
              name: 'Joao'
            }
          ]}
          onChange={(values) => console.log(values)}
        />
      </div>
    </ThemeProvider>
  );
};

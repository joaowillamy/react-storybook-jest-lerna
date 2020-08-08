import React from 'react';

import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Range from '.';

describe('Range', () => {
  test('Range', () => {
    const tree = renderer.create(<Range></Range>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';

import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Menu from '.';

describe('Menu', () => {
  test('Menu', () => {
    const tree = renderer.create(<Menu></Menu>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

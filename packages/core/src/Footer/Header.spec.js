import React from 'react';

import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Header from '.';

describe('Header', () => {
  test('Header', () => {
    const tree = renderer.create(<Header></Header>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

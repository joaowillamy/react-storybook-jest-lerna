import React from 'react';

import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Footer from '.';

describe('Footer', () => {
  test('Footer', () => {
    const tree = renderer.create(<Footer></Footer>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

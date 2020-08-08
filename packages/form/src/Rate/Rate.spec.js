import React from 'react';

import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Rate from '.';

describe('Rate', () => {
  test('Rate', () => {
    const tree = renderer.create(<Rate></Rate>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

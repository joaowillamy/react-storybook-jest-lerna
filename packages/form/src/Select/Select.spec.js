import React from 'react';

import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Select from '.';

describe('Select', () => {
  test('Select', () => {
    const tree = renderer.create(<Select></Select>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

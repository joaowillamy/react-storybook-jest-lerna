import React from 'react';

import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Checkbox from '.';

describe('Checkbox', () => {
  test('Checkbox', () => {
    const tree = renderer.create(<Checkbox></Checkbox>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

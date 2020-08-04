import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Card from '.';

describe('Card', () => {
  test('primary', () => {
    const tree = renderer.create(<Card>{'Test'}</Card>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

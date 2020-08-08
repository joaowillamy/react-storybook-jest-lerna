import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Breadcrumb from '.';

describe('Breadcrumb', () => {
  test('primary', () => {
    const tree = renderer
      .create(<Breadcrumb>{'Test'}</Breadcrumb>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

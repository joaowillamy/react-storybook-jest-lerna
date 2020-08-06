import React from 'react';

import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Modal from '.';

describe('Modal', () => {
  test('Modal', () => {
    const tree = renderer.create(<Modal></Modal>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

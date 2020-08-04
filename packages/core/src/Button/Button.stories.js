import React from 'react';

import Button from '.';

export default {
  component: Button,
  title: 'Core|Button'
};

export const primary = () => <Button>{'Button'}</Button>;

export const secondary = () => <Button variant="secondary">{'Button'}</Button>;

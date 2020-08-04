import React from 'react';

import Footer from '.';

export default {
  component: Footer,
  title: 'Core|Footer'
};

export const primary = () => <Footer>{'Footer'}</Footer>;

export const secondary = () => <Footer variant="secondary">{'Footer'}</Footer>;

import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@joaowillamy-test-quero/core';

import * as S from './Rate.styled';

const Rate = ({ value }) => {
  return (
    <S.Rate>
      {[1, 2, 3, 4, 5].map((start) => {
        if (value > start - 0.5) return <Icon.StarFill />;
        if (value > start - 1) return <Icon.StarHalf />;
        if (value < start) return <Icon.Star />;
      })}
    </S.Rate>
  );
};

Rate.propTypes = {
  value: PropTypes.number
};

export default Rate;

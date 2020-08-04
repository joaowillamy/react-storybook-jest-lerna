import React from 'react';
import PropTypes from 'prop-types';

import * as S from './Card.styled';

const Card = (props) => {
  return <S.Card {...props} />;
};

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

Card.defaultProps = {
  width: true,
  height: true
};

export default Card;

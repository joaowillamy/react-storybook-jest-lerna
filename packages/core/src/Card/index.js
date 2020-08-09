import React from "react";
import PropTypes from "prop-types";

import * as S from "./Card.styled";

const Card = props => {
  return <S.Card {...props} />;
};

Card.propTypes = {
  hover: PropTypes.bool
};

Card.defaultProps = {
  hover: true
};

export default Card;

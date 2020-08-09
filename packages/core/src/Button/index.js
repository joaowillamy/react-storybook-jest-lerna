import React from "react";
import PropTypes from "prop-types";

import * as S from "./Button.styled";

const Button = props => {
  return <S.Button {...props} />;
};

Button.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary"])
};

Button.defaultProps = {
  disabled: false,
  variant: "primary"
};

export default Button;

import React from "react";
import ReactSelect from "react-dropdown-select";
import PropTypes from "prop-types";

import * as S from "./Select.styled";

const Select = props => {
  return (
    <S.Select>
      <ReactSelect searchable={false} placeholder="Selecione..." {...props} />
    </S.Select>
  );
};

Select.propTypes = {
  labelField: PropTypes.string,
  valueField: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func
};

export default Select;

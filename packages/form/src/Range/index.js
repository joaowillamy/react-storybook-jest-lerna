import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";

import * as S from "./Range.styled";

const Range = ({ label, value, minRange, maxRange, onChange }) => {
  const [currentValue, setCurrentValue] = useState(value);
  const onChangeCallback = useCallback(onChange);

  return (
    <S.Range>
      {label && <S.RangeLabel>{label}</S.RangeLabel>}
      <S.RangeValue>
        {currentValue.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}
      </S.RangeValue>
      <S.RangeInput
        type="range"
        min={minRange}
        max={maxRange}
        value={currentValue}
        onChange={event => {
          setCurrentValue(Number(event.target.value));
          onChangeCallback && onChangeCallback(Number(event.target.value));
        }}
      />
    </S.Range>
  );
};

Range.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  maxRange: PropTypes.number,
  minRange: PropTypes.number,
  onChange: PropTypes.func
};

Range.defaultProps = {
  value: 10000
};
export default Range;

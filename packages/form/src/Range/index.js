import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import * as S from './Range.styled';

const Range = ({
  label,
  value,
  minRange,
  maxRange,
  onChange,
  prefix,
  sufix
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const onChangeCallback = useCallback(onChange);

  return (
    <S.Range>
      {label && <S.RangeLabel>{label}</S.RangeLabel>}
      <S.RangeValue>
        {`${prefix} ${currentValue}${sufix}`}
      </S.RangeValue>
      <S.RangeInput
        type="range"
        min={minRange}
        max={maxRange}
        value={currentValue}
        onChange={(event) => {
          setCurrentValue(event.target.value);
          onChangeCallback && onChangeCallback(event.target.value);
        }}
      />
    </S.Range>
  );
};

Range.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  maxRange: PropTypes.number,
  maxRange: PropTypes.number,
  onChange: PropTypes.func,
  prefix: PropTypes.string,
  sufix: PropTypes.string
};

Range.defaultProps = {
  maxRange: 0.1,
  maxRange: 1000,
  prefix: 'R$',
  sufix: ',00'
};
export default Range;

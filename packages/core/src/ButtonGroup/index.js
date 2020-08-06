import React, { useCallback, useState } from 'react';

import * as S from './ButtonGroup.styled';

const ButtonGroup = ({ onChange, options, ...props }) => {
  const [selected, setSelected] = useState('all');
  const callbackOnChange = useCallback(onChange);

  const changeSelectedOption = (option) => {
    setSelected(option);
    callbackOnChange && callbackOnChange(option);
  };

  return (
    <S.ButtonGroup {...props}>
      {options.map((option, index) => (
        <S.ButtonGroupOption
          key={index}
          onClick={() => changeSelectedOption(option.value)}
          isSelected={selected == option.value}
          variant="secondary"
        >
          {option.label}
        </S.ButtonGroupOption>
      ))}
    </S.ButtonGroup>
  );
};

export default ButtonGroup;

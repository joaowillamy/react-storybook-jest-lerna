import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Icon } from "@joaowillamy-test-quero/core";

import * as S from "./Checkbox.styled";

const Checkbox = ({ label, isSelected, value, name, onChange }) => {
  const [isChecked, setIsChecked] = useState(isSelected || false);
  const onChangeCallback = useCallback(onChange);

  const toggleIsChecked = () => {
    setIsChecked(!isChecked);
    onChangeCallback &&
      onChangeCallback({ value, name, isChecked: !isChecked });
  };

  return (
    <S.Checkbox>
      <S.CheckboxLabel>
        <S.CheckboxContainer>
          <S.CheckboxInput
            type="checkbox"
            value={value}
            name={name}
            checked={isChecked}
            onChange={toggleIsChecked}
          />
          <S.CheckboxIcon isChecked={isChecked}>
            <Icon.Check />
          </S.CheckboxIcon>
        </S.CheckboxContainer>
        {label}
      </S.CheckboxLabel>
    </S.Checkbox>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  isSelected: PropTypes.bool
};

export default Checkbox;

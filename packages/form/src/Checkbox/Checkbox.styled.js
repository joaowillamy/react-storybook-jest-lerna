import styled, { css } from "styled-components";

export const Checkbox = styled.div`
  display: inline;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: auto;
  width: auto;
  outline: none;
  transition: all 0.3s;
`;

export const CheckboxContainer = styled.div`
  margin-right: 5px;
`;

export const CheckboxInput = styled.input`
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const CheckboxIcon = styled.div`
  background: ${({ isChecked, theme }) =>
    isChecked ? theme.colors.bluePrimary : "#fff"};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20px;
  transition: all 150ms;
  width: 20px;
  border: 0.5px solid
    ${({ theme, isChecked }) =>
      isChecked ? theme.colors.bluePrimary : theme.colors.black};

  svg {
    margin-bottom: 1px;
    color: #fff;
    visibility: ${({ isChecked }) => (isChecked ? "visible" : "hidden")};
  }
`;

import styled from "styled-components";

export const Range = styled.div`
  width: 100%;
`;

export const RangeLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

export const RangeValue = styled.p`
  margin: 5px 0;
`;

export const RangeInput = styled.input`
  background: ${({ theme }) => theme.colors.bluePrimary};
  border-radius: 10px;
  height: 4px;
  margin: 15px 0;
  outline: none;
  transition: opacity 0.2s;
  width: 100%;

  ::-webkit-slider-thumb {
    appearance: none;
    background: #fff;
    border: 2px solid ${({ theme }) => theme.colors.bluePrimary};
    border-radius: 50%;
    cursor: pointer;
    height: 25px;
    width: 25px;
    padding: 10px;
  }

  ::-moz-range-thumb {
    background: #fff;
    border: 2px solid ${({ theme }) => theme.colors.bluePrimary};
    border-radius: 50%;
    cursor: pointer;
    height: 25px;
    width: 25px;
    padding: 10px;
  }
`;

import styled, { css } from "styled-components";
import media from "styled-media-query";

import { Button } from "../";

export const ButtonGroup = styled.div``;

export const ButtonGroupOption = styled(Button)`
  margin: 0;
  border-radius: 0;

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background-color: ${theme.colors.blueSecondary};
      color: #fff;
    `};

  :first-child {
    border-radius: 5px 5px 0 0;

    ${media.greaterThan("medium")`
      border-radius: 5px 0 0 5px;
    `}
  }

  :last-child {
    border-radius: 0 0 5px 5px;

    ${media.greaterThan("medium")`
      border-radius: 0 5px 5px 0;
    `}
  }
`;

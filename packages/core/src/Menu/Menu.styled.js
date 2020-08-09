import styled from "styled-components";
import media from "styled-media-query";

import { chooseScrem } from "../help/chooseScreem";

export const Menu = styled.div`
  background-color: ${({ theme }) => theme.colors.bluePrimary};
`;

export const MenuItems = styled.ul`
  ${media.lessThan("medium")`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const MenuItem = styled.li`
  display: inline-block;
  padding: 15px;
  font-weight: 600;
  color: #fff;
  ${({ isActive, theme }) =>
    isActive && `background-color: ${theme.colors.blueSecondary}`}
  ${chooseScrem};
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.blueSecondary};
  }

  svg {
    width: ${({ theme }) => theme.iconSizes.lg};
    color: #fff;
  }
`;

import styled, { css } from "styled-components";
import media from "styled-media-query";

import { chooseScrem } from "../help/chooseScreem";

export const Header = styled.header`
  width: 100vw;
  background-color: #fff;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.shadows.sm()};

  svg {
    width: ${({ theme }) => theme.iconSizes.lg};
    fill: ${({ theme }) => theme.colors.bluePrimary};
  }
`;

export const HeaderNavItens = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderNavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${chooseScrem}

  ${media.greaterThan("medium")`
    flex-direction: row;
  `};

  ${({ borderLeftMobile }) => {
    if (borderLeftMobile)
      return css`
        ${media.lessThan("medium")`
              border-left: 2px solid #ccc;
              padding-left: 15px;
         `}
      `;
  }};

  ${({ borderRightMobile }) => {
    if (borderRightMobile)
      return css`
        ${media.lessThan("medium")`
              border-right: 2px solid #ccc;
              padding-right: 15px;
         `}
      `;
  }};

  ${({ borderRightDesktop }) => {
    if (borderRightDesktop)
      return css`
        ${media.greaterThan("medium")`
              border-right: 2px solid #ccc;
              padding-right: 15px;
         `}
      `;
  }};
`;

export const HeaderNavText = styled.p`
  font-size: 12px;
  margin-top: 5px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.bluePrimary};

  ${media.greaterThan("medium")`
    margin: 0px 10px;
  `};

  ${chooseScrem}
`;

export const HeaderLogo = styled.img`
  width: 120px;
`;

export const HeaderNavFone = styled.span`
  font-size: 14px;
  margin-bottom: 15px;
  font-weight: 800;
`;

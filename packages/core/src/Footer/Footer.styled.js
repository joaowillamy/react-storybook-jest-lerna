import styled, { css } from "styled-components";
import media from "styled-media-query";

import { chooseScrem } from "../help/chooseScreem";

export const Footer = styled.div`
  background-color: ${({ theme }) => theme.colors.blueSecondary};
`;

export const FooterEnd = styled.div`
  background-color: ${({ theme }) => theme.colors.bluePrimary};
  padding: ${({ theme }) => theme.space.xxxl} 0;
  color: #fff;
  font-weight: 600;
  text-align: center;
  font-size: 12px;
`;

export const FooterCards = styled.ul`
  width: 100%;
`;

export const FooterCardContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  ${media.lessThan("medium")`
    ${({ fullInMobile }) => !fullInMobile && "display: block;"}
    `}
`;

export const FooterCardText = styled.span`
  font-weight: 600;
  font-size: 13px;
  ${chooseScrem}
`;

export const FooterCardSubText = styled.span`
  font-weight: 300;
  font-size: 12px;
  ${chooseScrem}
`;

export const FooterCard = styled.li`
  display: inline-block;
  padding: 20px;
  color: #fff;
  font-size: 13px;
  text-align: center;

  svg {
    width: 26px;
    color: #fff;
    margin-bottom: 10px;
  }

  ${({ borderInMobile, theme }) =>
    borderInMobile &&
    css`
      border-right: 4px solid ${theme.colors.bluePrimary};
      border-left: 4px solid ${theme.colors.bluePrimary};
    `}

  ${({ fullInMobile, theme }) => css`
    width: ${fullInMobile ? "100%" : "33%"};

    ${fullInMobile &&
      css`
        border-bottom: 4px solid ${theme.colors.bluePrimary};
        text-align: left;
        svg {
          margin-right: 10px;
          margin-bottom: 0px;
        }
      `}
  `};

  ${media.greaterThan("medium")`
    border:none;
    width: 25%;
    text-align: left;
    svg {
          margin-right: 10px;
          margin-bottom: 0px;
        }
  `}
`;

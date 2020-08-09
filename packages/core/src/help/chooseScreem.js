import { css } from "styled-components";
import media from "styled-media-query";

export const chooseScrem = css`
  ${({ justMobile }) =>
    justMobile &&
    css`
      ${media.greaterThan("medium")`
          display: none;
        `}
    `};

  ${({ justDesktop }) =>
    justDesktop &&
    css`
      ${media.lessThan("medium")`
          display: none;
        `}
    `};
`;

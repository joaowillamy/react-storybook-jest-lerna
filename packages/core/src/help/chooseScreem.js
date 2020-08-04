import { css } from 'styled-components';
import midia from 'styled-media-query';

export const chooseScrem = css`
  ${({ justMobile }) =>
    justMobile &&
    css`
      ${midia.greaterThan('medium')`
          display: none;
        `}
    `};

  ${({ justDesktop }) =>
    justDesktop &&
    css`
      ${midia.lessThan('medium')`
          display: none;
        `}
    `};
`;

import styled from "styled-components";

import { chooseScrem } from "../help/chooseScreem";

export const Breadcrumb = styled.div`
  margin: 10px 0;
`;

export const BreadcrumbText = styled.p`
  font-weight: 600;
  font-size: 14px;
  ${chooseScrem}
`;

export const BreadcrumbTextBlue = styled.span`
  color: ${({ theme }) => theme.colors.bluePrimary};

  svg {
    width: ${({ theme }) => theme.iconSizes.lg};
  }
`;

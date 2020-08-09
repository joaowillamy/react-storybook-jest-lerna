import styled from "styled-components";

export const Rate = styled.ul`
  display: inline-block;

  svg {
    width: 23px;
    color: ${({ theme }) => theme.colors.yellowPrimary};
  }
`;

export const RateItem = styled.li`
  display: inline-block;
`;

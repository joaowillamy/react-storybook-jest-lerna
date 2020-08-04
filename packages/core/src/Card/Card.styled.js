import styled from 'styled-components';
import media from 'styled-media-query';

export const Card = styled.div`
  padding: 10px;
  box-shadow: ${({ theme }) => theme.shadows.md()};
  transition: all 0.3s;
  display: inline-block;
  width: 90%;
  min-height: 100px;
  cursor: pointer;
  text-align: center;

  img {
    max-width: 100%;
    max-height: 50px;
    margin: 0 auto;
  }

  :hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg()};
  }

  ${media.greaterThan('medium')`
    min-height: 200px;
    width: 23%;
    margin: 0 5px
  `}
`;

import styled from 'styled-components';
import midia from 'styled-media-query';

export const Container = styled.div`
  ${midia.greaterThan('medium')`
          width: 95%;
          margin: 0 auto;
        `}
`;

import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  ${media.greaterThan("medium")`
      width: 95%;
      margin: 0 auto;
    `}
`;

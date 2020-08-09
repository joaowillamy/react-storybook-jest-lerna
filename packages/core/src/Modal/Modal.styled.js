import styled from "styled-components";
import media from "styled-media-query";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.Overlay};
  overflow-y: scroll;
`;

export const ModalBox = styled.div`
  width: 100%;
  position: relative;
  max-height: 70vh;
  padding-bottom: 20px;

  ${media.greaterThan("medium")`
    width: 70%;
  `}
`;

export const ModalClose = styled.div`
  color: #ccc;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: -30px;

  svg {
    width: 25px;
    color: #fff;
  }
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 10px 15px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
  height: 100%;
`;

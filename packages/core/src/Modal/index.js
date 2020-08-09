import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icons";

import * as S from "./Modal.styled";

const Modal = ({ toggleModal, children, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <S.ModalBackground>
          <S.ModalBox>
            <S.ModalClose onClick={() => toggleModal()}>
              <Icon.Close />
            </S.ModalClose>
            <S.ModalContent>{children}</S.ModalContent>
            <br />
            <br />
          </S.ModalBox>
        </S.ModalBackground>
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  toggleModal: PropTypes.func
};

export default Modal;

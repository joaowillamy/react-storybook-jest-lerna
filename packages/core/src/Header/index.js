import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icons";

import { Container } from "../help/Container.styled";

import * as S from "./Header.styled";

const Header = ({ srcLogo }) => {
  return (
    <S.Header>
      <nav>
        <Container>
          <S.HeaderNavItens>
            <S.HeaderNavItem>
              <ul style={{ display: "inherit" }}>
                <S.HeaderNavItem borderRightMobile borderRightDesktop>
                  <Icon.InfoCircle />
                  <S.HeaderNavText justMobile>Ajuda</S.HeaderNavText>
                  <S.HeaderNavText justDesktop>Como funciona</S.HeaderNavText>
                </S.HeaderNavItem>

                <S.HeaderNavItem justDesktop style={{ marginLeft: "15px" }}>
                  <Icon.Whatsapp style={{ color: "#25d366" }} />
                  <S.HeaderNavText>
                    <S.HeaderNavFone>0800 123 2222</S.HeaderNavFone>
                    <br /> Envie mensagem ou lique
                  </S.HeaderNavText>
                </S.HeaderNavItem>
              </ul>
            </S.HeaderNavItem>

            <S.HeaderNavItem>
              <S.HeaderLogo src={srcLogo} alt={"Logo quero bolsa"} />
            </S.HeaderNavItem>

            <S.HeaderNavItem borderLeftMobile>
              <S.HeaderNavText justDesktop>Nome Sobrenome</S.HeaderNavText>
              <Icon.UserCircle />
              <S.HeaderNavText justMobile>Conta</S.HeaderNavText>
            </S.HeaderNavItem>
          </S.HeaderNavItens>
        </Container>
      </nav>
    </S.Header>
  );
};

Header.propTypes = {
  srcLogo: PropTypes.string
};

Header.defaultProps = {
  srcLogo: "https://via.placeholder.com/885x307"
};

export default Header;

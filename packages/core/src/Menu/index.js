import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icons";

import { Container } from "../help/Container.styled";
import * as S from "./Menu.styled";

const Menu = props => (
  <S.Menu {...props}>
    <nav>
      <Container>
        <S.MenuItems>
          <S.MenuItem>Minha conta</S.MenuItem>
          <S.MenuItem justDesktop>Pré-matrículas</S.MenuItem>
          <S.MenuItem isActive justDesktop>
            Bolsas favoritas
          </S.MenuItem>
          <S.MenuItem justMobile>
            Menu <Icon.ArrowDownward />
          </S.MenuItem>
        </S.MenuItems>
      </Container>
    </nav>
  </S.Menu>
);

Menu.propTypes = {
  options: PropTypes.array
};

export default Menu;

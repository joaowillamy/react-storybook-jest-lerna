import React from "react";

import { Icon } from "../Icons";

import * as S from "./Breadcrumb.styled";

const Breadcrumb = props => {
  return (
    <S.Breadcrumb {...props}>
      <S.BreadcrumbText justDesktop>
        <S.BreadcrumbTextBlue> Home</S.BreadcrumbTextBlue> /{" "}
        <S.BreadcrumbTextBlue> Minha conta</S.BreadcrumbTextBlue> / Bolsas
        favoritas
      </S.BreadcrumbText>
      <S.BreadcrumbText justMobile>
        <S.BreadcrumbTextBlue>
          <Icon.ArrowBack /> Minha conta
        </S.BreadcrumbTextBlue>
      </S.BreadcrumbText>
    </S.Breadcrumb>
  );
};

export default Breadcrumb;

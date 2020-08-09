import React from "react";

import { Icon } from "../Icons";
import { Container } from "../help/Container.styled";

import * as S from "./Footer.styled";

const Footer = () => (
  <S.Footer>
    <footer>
      <Container>
        <S.FooterCards>
          <S.FooterCard fullInMobile>
            <S.FooterCardContainer fullInMobile>
              <Icon.Whatsapp />
              <div>
                <S.FooterCardText>{"0800 123 2222"}</S.FooterCardText> <br />
                <S.FooterCardSubText justMobile>
                  {"Segunda a sexta de 8h às 22h"}
                </S.FooterCardSubText>
                <S.FooterCardSubText justDesktop>
                  {"Seg - Sex 8h-22h"}
                </S.FooterCardSubText>
              </div>
            </S.FooterCardContainer>
          </S.FooterCard>

          <S.FooterCard>
            <S.FooterCardContainer>
              <Icon.Chatbubbles />
              <div>
                <S.FooterCardText justMobile>{"Chat"}</S.FooterCardText>
                <S.FooterCardText justDesktop>
                  {"Chat ao vivo"}
                </S.FooterCardText>{" "}
                <br />
                <S.FooterCardSubText justDesktop>
                  {"Seg - Sex 8h-22h"}
                </S.FooterCardSubText>
              </div>
            </S.FooterCardContainer>
          </S.FooterCard>

          <S.FooterCard borderInMobile>
            <S.FooterCardContainer>
              <Icon.Email />
              <div>
                <S.FooterCardText justMobile>{"E-mail"}</S.FooterCardText>
                <S.FooterCardText justDesktop>
                  {"Mande um e-mail"}
                </S.FooterCardText>{" "}
                <br />
                <S.FooterCardSubText justDesktop>
                  {"Respondemos rapidinho"}
                </S.FooterCardSubText>
              </div>
            </S.FooterCardContainer>
          </S.FooterCard>

          <S.FooterCard>
            <S.FooterCardContainer>
              <Icon.InfoCircle />
              <div>
                <S.FooterCardText justMobile>{"Ajuda"}</S.FooterCardText>
                <S.FooterCardText justDesktop>
                  {"Central de ajuda"}
                </S.FooterCardText>{" "}
                <br />
                <S.FooterCardSubText justDesktop>
                  {"Encontre todas as respostas"}
                </S.FooterCardSubText>
              </div>
            </S.FooterCardContainer>
          </S.FooterCard>
        </S.FooterCards>
      </Container>
      <S.FooterEnd>{"Feito com ❤️ pela Quero Educação"}</S.FooterEnd>
    </footer>
  </S.Footer>
);

export default Footer;

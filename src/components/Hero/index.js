import React from "react";

import {
  SectionText,
  TextContainer,
  WrapperButton,
  WrapperHero,
} from "./styles";
import { Container } from "../../globalStyles";
import { ButtonStyled } from "../Button/styles";

function Hero() {
  return (
    <SectionText>
      <Container>
        <WrapperHero>
          <TextContainer>
            <h1>Henrique Marques</h1>
            <h3>Estudante de Desenvolvimento Web && UI/UX</h3>
            <WrapperButton>
              <ButtonStyled
                as="a"
                href="assets/img/henrique-curriculum.pdf"
                target="_blank"
                backgroundColor="#75CB7C"
              >
                Download CV
              </ButtonStyled>
              <ButtonStyled
                as="a"
                href="https://github.com/lhenriquedev"
                target="_blank"
                backgroundColor="#3F3D56"
              >
                Github
              </ButtonStyled>
            </WrapperButton>
          </TextContainer>
          <img src="assets/img/coding.svg" alt="Art of a man coding" />
        </WrapperHero>
      </Container>
    </SectionText>
  );
}

export default Hero;

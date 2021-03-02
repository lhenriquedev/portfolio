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
              <ButtonStyled backgroundColor="#75CB7C">Download CV</ButtonStyled>
              <ButtonStyled backgroundColor="#3F3D56">Github</ButtonStyled>
            </WrapperButton>
          </TextContainer>
          <img src="assets/img/coding.svg" />
        </WrapperHero>
      </Container>
    </SectionText>
  );
}

export default Hero;

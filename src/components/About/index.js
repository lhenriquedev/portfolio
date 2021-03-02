import React from "react";

import { ButtonStyled } from "../Button/styles";

import { Container } from "../../globalStyles";

import { AboutSection, AboutTextContainer } from "./styles";

function About() {
  return (
    <AboutSection>
      <Container>
        <AboutTextContainer>
          <h3>Sobre mim</h3>
          <p>
            Olá! Meu nome é Luiz Henrique, sou um estudante de Desenvolvimento
            Web. Gosto de criar coisas para a internet. Atualmente estou
            estudando JavaScript para todas as plataformas.
          </p>
          <p>
            Moro em uma cidade no interior de Porto Alegre, tenho 20 anos e
            estou em busca de me tornar um Desenvolver Web e também a ajudar
            outros desevolvedores e iniciantes a entrarem no mercado de
            trabalho.
          </p>
          <ButtonStyled backgroundColor="#75CB7C">Linkedin</ButtonStyled>
        </AboutTextContainer>
      </Container>
    </AboutSection>
  );
}

export default About;

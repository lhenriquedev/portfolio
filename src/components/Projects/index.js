import React from "react";

import { Container } from "../../globalStyles";
import { ButtonStyled } from "../Button/styles";

import {
  SectionProjects,
  TextContainer,
  WrapperCard,
  Card,
  TextWrapper,
  ImageWrapper,
} from "./styles";

export default function Projects() {
  return (
    <SectionProjects>
      <Container>
        <TextContainer>
          <h3>Meus Projetos</h3>
          <h4>
            Aqui é onde coloco alguns projetos que estou fazendo, tanto sozinho,
            como em video aula.
          </h4>
        </TextContainer>
        <WrapperCard>
          <Card>
            <ImageWrapper>
              <img src="assets/img/project-1.png" />
            </ImageWrapper>
            <TextWrapper>
              <h4>Cosmo Junkie</h4>
              <p>
                Site desenvolvido pelo canal do youtube do The net Ninja, usando
                o conceito mobile-first.
              </p>
            </TextWrapper>
            <ButtonStyled
              href="https://www.google.com"
              backgroundColor="#3F3D56"
            >
              Github
            </ButtonStyled>
          </Card>

          <Card>
            <ImageWrapper>
              <img src="assets/img/project-2.png" />
            </ImageWrapper>
            <TextWrapper>
              <h4>Doguinhos</h4>
              <p>
                Projeto desenvolvido em uma cadeira de Desenvolvimento Web II na
                Fauldade Senac - FSPOA.
              </p>
            </TextWrapper>
            <ButtonStyled
              href="https://www.google.com"
              backgroundColor="#3F3D56"
            >
              Github
            </ButtonStyled>
          </Card>

          <Card>
            <ImageWrapper>
              <img src="assets/img/project-3.png" />
            </ImageWrapper>
            <TextWrapper>
              <h4>Bookmark</h4>
              <p>
                Projeto desenvolvido na plataforma Frontend Mentor. (ainda não
                está responsivo)
              </p>
            </TextWrapper>
            <ButtonStyled
              href="https://www.google.com"
              backgroundColor="#3F3D56"
            >
              Github
            </ButtonStyled>
          </Card>

          <Card>
            <ImageWrapper>
              <img src="assets/img/project-4.png" />
            </ImageWrapper>
            <TextWrapper>
              <h4>Crypto Tracker</h4>
              <p>
                Projeto desenvolvido pelo canal do Brian Design. O projeto era
                criar uma aplicação em react consumindo uma api de criptomoedas.
              </p>
            </TextWrapper>
            <ButtonStyled
              href="https://www.google.com"
              backgroundColor="#3F3D56"
            >
              Github
            </ButtonStyled>
          </Card>
        </WrapperCard>
      </Container>
    </SectionProjects>
  );
}

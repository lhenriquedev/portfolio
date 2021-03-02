import React from "react";

import { Container } from "../../globalStyles";
import { SkillsContainer, SkillsUl } from "./styles";

function Skills() {
  return (
    <SkillsContainer>
      <Container>
        <h3>Meus conhecimentos</h3>
        <SkillsUl>
          <figure>
            <img src="assets/img/html-5.svg" />
            <figcaption>HTML</figcaption>
            <p>Estudando há 1 ano (intermediário)</p>
          </figure>

          <figure>
            <img src="assets/img/css-3.svg" />
            <figcaption>CSS</figcaption>
            <p>Estudando há 1 ano (intermediário)</p>
          </figure>

          <figure>
            <img src="assets/img/javascript.svg" />
            <figcaption>JavaScript</figcaption>
            <p>Estudando há 1 ano (intermediário)</p>
          </figure>

          <figure>
            <img src="assets/img/react.svg" />
            <figcaption>React</figcaption>
            <p>Estudando há 1 mes (iniciante)</p>
          </figure>
        </SkillsUl>
      </Container>
    </SkillsContainer>
  );
}

export default Skills;

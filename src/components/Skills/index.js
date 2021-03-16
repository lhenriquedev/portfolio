import React from "react";

import { Container } from "../../globalStyles";
import { SkillsContainer, SkillsWrapper } from "./styles";

function Skills() {
  return (
    <SkillsContainer id="skills">
      <Container>
        <h3>Meus conhecimentos</h3>
        <SkillsWrapper>
          <figure>
            <img src="assets/img/html-5.svg" alt="Html icon" />
            <figcaption>HTML</figcaption>
            <p>Estudando há 1 ano (intermediário)</p>
          </figure>

          <figure>
            <img src="assets/img/css-3.svg" alt="CSS3 icon" />
            <figcaption>CSS</figcaption>
            <p>Estudando há 1 ano (intermediário)</p>
          </figure>

          <figure>
            <img src="assets/img/javascript.svg" alt="JavaScript icon" />
            <figcaption>JavaScript</figcaption>
            <p>Estudando há 1 ano (intermediário)</p>
          </figure>

          <figure>
            <img src="assets/img/react.svg" alt="ReactJS icon" />
            <figcaption>ReactJS</figcaption>
            <p>Estudando há 1 mes (iniciante)</p>
          </figure>
        </SkillsWrapper>
      </Container>
    </SkillsContainer>
  );
}

export default Skills;

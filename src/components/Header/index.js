import React from "react";

import { Nav, HeaderContent } from "./styles";

import { Container } from "../../globalStyles";

function Header() {
  return (
    <HeaderContent>
      <Container>
        <Nav>
          <h2>Henrique</h2>
          <ul>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#skills">Conhecimentos</a>
            </li>

            <li>
              <a href="#projetos">Projetos</a>
            </li>
          </ul>
        </Nav>
      </Container>
    </HeaderContent>
  );
}

export default Header;

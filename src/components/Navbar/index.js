import React from "react";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavContainer,
  NavMenu,
  NavLogo,
  NavItem,
  NavLink,
  MobileIcon,
} from "./styles";

function Navbar({ handleToggle }) {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to='/'>Henrique.</NavLogo>

        <MobileIcon onClick={handleToggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavItem>
            <NavLink to='about'>Sobre</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to='skills'>Conhecimentos</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to='projects'>Projetos</NavLink>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;

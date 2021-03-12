import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./styles";

const Sidebar = ({ isOpen, handleToggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={handleToggle}>
      <Icon onClick={handleToggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about'>Sobre</SidebarLink>
          <SidebarLink to='skills'>Conhecimentos</SidebarLink>
          <SidebarLink to='projects'>Projetos</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

const pessoa = {
  nome: "Lucas",
  altura: "Marques",
};

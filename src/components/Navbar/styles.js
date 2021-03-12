import styled from "styled-components";

import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #fff;
  height: 8rem;
  /* margin-top: -8rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (min-width: 768px) {
    transition: 0.8s all ease;
  }
`;

// Container da navegação
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  z-index: 1;
  width: 100%;
  padding: 0 2.4rem;
  max-width: 110rem;
`;

export const NavLogo = styled(LinkR)`
  cursor: pointer;
  color: #509a62;
  justify-self: flex-start;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 55%);
  font-size: 3rem;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 8rem;
`;
export const NavLink = styled(LinkS)`
  display: flex;
  align-items: center;
  color: #75cb7c;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #30433c;
  }
`;

import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #75cb7c;
  display: grid;
  top: 0;
  transition: 0.2s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 3rem;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 8rem);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 10rem);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  font-size: 2rem;
  color: inherit;
  cursor: pointer;

  &:hover {
    color: #3a4042;
    transition: 0.2s ease-in-out;
  }
`;

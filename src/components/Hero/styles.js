import styled from "styled-components";

import { ButtonStyled } from "../Button/styles";

export const SectionText = styled.section`
  padding: 10rem 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 5rem;

  h1 {
    font-size: 4rem;
    color: #509a62;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.8rem;
    color: #3a4042;
    margin-bottom: 2rem;
  }

  @media (min-width: 960px) {
    h1 {
      font-size: 6rem;
      margin-bottom: 2rem;
    }

    h3 {
      font-size: 2.4rem;
    }
  }
`;

export const WrapperHero = styled.div`
  overflow: hidden;
  max-height: 100vh;
  height: 100%;

  img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 50%;
    }
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 960px) {
    flex-direction: row;

    ${ButtonStyled}:not(:last-child) {
      margin-right: 3rem;
    }
  }
`;

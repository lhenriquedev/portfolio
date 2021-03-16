import styled from "styled-components";
import { ButtonStyled } from "../Button/styles";

export const SectionProjects = styled.section`
  padding: 10rem 0;
  height: 100%;
  text-align: center;
`;

export const TextContainer = styled.div`
  h3 {
    font-size: 3rem;
    margin-bottom: 5rem;
    color: #3f3d56;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #3a4042;
    margin-bottom: 5rem;
  }

  @media (min-width: 960px) {
    h3 {
      margin-bottom: 1rem;
    }
  }
`;

export const WrapperCard = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 50rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  position: relative;

  ${ButtonStyled} {
    position: absolute;
    bottom: 0;
    margin-bottom: 0;
    border-radius: 0;
    width: 100%;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ImageWrapper = styled.div`
  align-self: flex-start;
  width: 100%;
  height: 25rem;
  border-bottom: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  h4 {
    font-size: 2.4rem;
    color: #75cb7c;
  }
  p {
    font-size: 1.6rem;
    margin: 3rem 0;
  }
`;

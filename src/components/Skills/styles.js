import styled from "styled-components";

export const SkillsContainer = styled.section`
  padding: 10rem 0;

  h3 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 5rem;
    color: #3f3d56;
  }
`;

export const SkillsUl = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  height: auto;

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;

    height: 100%;
    box-shadow: 0 0 20px #e7e7e7;

    transition: all 0.5s;

    &:hover {
      transform: scale(1.03);
    }

    img {
      width: 30%;
    }
    figcaption {
      font-size: 2rem;
      font-weight: 700;
      margin: 2rem 0;
      color: #3f3d56;
    }

    p {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 1.6rem;
      color: #509a62;
    }

    @media (min-width: 960px) {
      img {
        width: 70%;
      }
    }
  }
`;

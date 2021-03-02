import styled from "styled-components";

export const HeaderContent = styled.header`
  width: 100%;

  padding: 3rem 0;
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: #75cb7c;
    margin: 0 auto;
  }

  ul {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    list-style: none;

    li:not(:last-child) {
      margin-right: 1.6rem;
    }
    a {
      display: inline-block;
      text-decoration: none;
      color: #3a4042;
      font-size: 1.7rem;
      font-weight: 700;
      padding: 0.4rem 1.2rem;

      transition: color 0.2s;

      &:hover {
        color: #509a62;
      }
    }
  }

  @media (min-width: 960px) {
    h2 {
      margin: 0;
    }
  }
`;

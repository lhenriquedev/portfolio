import styled from "styled-components";

export const ButtonStyled = styled.a`
  padding: 1.6rem 3.2rem;
  background: ${(props) => props.backgroundColor};
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;

  margin-bottom: 2rem;
  border-radius: 4px;
  text-decoration: none;

  cursor: pointer;
`;

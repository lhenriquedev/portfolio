import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:  0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    overflow-x: hidden;
    font-family: 'Source Sans Pro', sans-serif;
  }

  section {
    border-top: 1px solid #ddd;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export default GlobalStyle;

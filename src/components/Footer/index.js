import React from "react";
import { FooterContainer, SocialWrapper } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <SocialWrapper>
        <a href="">
          <img src="assets/img/github.svg" alt="github icon" />
        </a>
        <a href="">
          <img src="assets/img/instagram.svg" alt="instagram icon" />
        </a>
        <a href="">
          <img src="assets/img/twitter.svg" alt="twitter icon" />
        </a>
        <a href="">
          <img src="assets/img/linkedin.svg" alt="linkedin icon" />
        </a>
      </SocialWrapper>

      <p>
        Primeira versão do meu portfólio. Ainda está em processo de mudança.
        Site feito usando React.js e Styled-Components
      </p>
    </FooterContainer>
  );
};

export default Footer;

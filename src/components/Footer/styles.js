import styled from "styled-components";

export const FooterContainer = styled.footer`
  border-top: 1px solid #ddd;
  padding: 10rem 0;
  width: 100%;
  height: 20rem;
  background-color: #3f3d56;

  p {
    font-size: 1.6rem;
    text-align: center;
    margin-top: 2rem;
    color: #eee;
    font-weight: 600;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  img {
    width: 3rem;
    height: 3rem;
  }
`;

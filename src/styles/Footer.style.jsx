import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 3.5rem;
  background-color: var(--main);

  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: space-between;
`;

export const RightsContainer = styled.div`
  width: 40%;
  padding: 1rem;

  font-weight: 600;
  font-family: var(--mainText);
  font-size: 1.1rem;

  display: flex;
  align-items: center;

  @media (max-width: 675px) {
    display: none;
  }
`;

export const SocialMedias = styled.div`
  width: 35rem;
  padding: 1rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  ul {
    width: 100%;
    height: 4rem;

    padding: 0.5rem;

    display: flex;
    justify-content: space-around;
    animation: transform 0.5s;
  }

  ul > li:last-child {
    margin-left: 20px;
  }

  ul > li:hover {
    transform: scale(1.1);
  }
  ul > li {
    width: auto;
  }

  ul > li > a {
    width: 100%;
  }

  ul > li > a > img {
    height: 100%;
  }

  @media (max-width: 675px) {
    width: 100%;
  }
`;

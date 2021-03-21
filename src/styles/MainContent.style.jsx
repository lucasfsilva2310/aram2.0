import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 4rem;

  width: 100%;
  height: 55rem;

  background-image: ${(props) =>
    props.insideMenuPage === true
      ? "url(images/backgroundMenu.jpg)"
      : "url(images/background.png)"};
  background-repeat: no-repeat;
  background-size: 120% 60rem;

  display: flex;

  @media (max-width: 970px) {
    background-image: ${(props) =>
      props.insideMenuPage === true
        ? "url(images/backgroundMenuShrinked.jpg)"
        : "url(images/backgroundshrinked.png)"};
    background-size: 160% 60rem;
  }
  @media (max-width: 605px) {
    background-size: 70rem 60rem;
  }
  @media (max-width: 420px) {
    background-image: ${(props) =>
      props.insideMenuPage === true
        ? "url(images/backgroundMenuShrinked.jpg)"
        : "url(images/backgroundshrinked.png)"};
    background-size: 180% 60rem;
  }
`;

export const TextContainer = styled.div`
  width: 60rem;
  height: 20rem;

  margin: 19rem 0 0 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  text-align: center;

  color: var(--white);

  font-family: var(--mainText);

  h1 {
    font-size: 2.5rem;
  }

  span {
    font-size: 1.5rem;
  }

  @media (max-width: 915px) {
    width: 80%;
    margin: 19rem 0 0 5rem;
  }

  @media (max-width: 605px) {
    width: 100%;
    margin: 19rem 0 0 0;
  } ;
`;

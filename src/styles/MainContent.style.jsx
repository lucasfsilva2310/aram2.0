import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 4rem;

  width: 100%;
  height: 55rem;

  background-image: ${(props) =>
    props.insideMenuPage === true
      ? "url(images/background.png)"
      : "url(images/background.png)"};
  background-repeat: no-repeat;
  background-size: 120% 100%;

  display: flex;
`;

export const TextContainer = styled.div`
  width: 60rem;
  height: 20rem;

  margin: 19rem 0 0 5rem;

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
`;

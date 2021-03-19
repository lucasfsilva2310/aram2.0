import styled from "styled-components";

export const MenuDishesContainer = styled.div`
  width: 80rem;
  min-width: 20%;
  margin: 1rem auto 4rem auto;

  display: flex;
  justify-content: space-between;
  /* align-items: stretch; */
  flex-wrap: wrap;

  @media (max-width: 1150px) {
    width: 95%;

    flex-wrap: wrap;
  }
`;

export const ContainerLeftSide = styled.div`
  width: 40rem;

  display: flex;
  flex-direction: column;
  @media (max-width: 1300px) {
    width: 95%;

    margin: 1rem auto;
  }
`;

export const ContainerRightSide = styled.div`
  width: 40rem;

  display: flex;
  flex-direction: column;
  @media (max-width: 1300px) {
    width: 95%;

    margin: 1rem auto;
  }
`;

export const WhiteCard = styled.div`
  width: 35rem;
  background-color: var(--white);

  margin: 0.3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: var(--mainText);

  h2 {
    width: fit-content;
    font-size: 2rem;
    font-weight: 500;
    padding: 2rem 1rem 1rem 1rem;
    border-bottom: 2px solid grey;
    margin-bottom: 1rem;
  }

  p {
    color: grey;
  }

  strong {
    padding: 0.5rem 0;
  }

  @media (max-width: 1300px) {
    width: 95%;

    margin: 1rem auto;
  }
`;

export const BordedCard = styled.div`
  width: 35rem;

  border: 4px solid black;

  margin: 0.6rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: var(--mainText);

  h2 {
    width: fit-content;
    font-size: 2rem;
    font-weight: 500;
    padding: 2rem 1rem 1rem 1rem;
    border-bottom: 2px solid grey;
    margin-bottom: 1rem;
  }
  strong {
    padding: 0.5rem 0;
  }
  @media (max-width: 1300px) {
    width: 95%;

    margin: 1rem auto;
  }
`;

export const ImageCard = styled.div`
  width: 35rem;

  background: var(--white);

  margin: 0.3rem 1.5rem;

  padding: 0.5rem;

  img {
    width: 100%;
    border: 2px solid grey;
  }

  @media (max-width: 1300px) {
    width: 95%;
    margin: 0 auto;
  }
`;

export const DishCard = styled.div`
  display: flex;

  padding: 1.5rem 2.5rem;

  img {
    width: 10rem;
  }
  @media (max-width: 535px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DishCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;

  @media (max-width: 370px) {
    padding: 0;
  }
`;

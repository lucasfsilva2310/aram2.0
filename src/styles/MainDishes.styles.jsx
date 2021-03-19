import styled from "styled-components";

export const DishesContainer = styled.div`
  width: 100%;

  background-color: var(--white);
`;

export const MainContainer = styled.div`
  height: 100%;
  width: 100%;

  padding: 2rem;
  margin: 1rem auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-family: var(--mainText);
  text-align: center;
  div > h2 {
    margin-top: 2.5rem;
    font-size: 2rem;
    padding-bottom: 0.5rem;
  }

  div > span {
    color: grey;
  }

  @media (max-width: 435px) {
    text-align: center;
  } ;
`;

export const DishContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between
  align-items: center;

  margin-top: 2.5rem;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;
export const DishCard = styled.div`
  width: 24rem;
  height: 100%;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: var(--mainText);

  img {
    width: 100%;
  }

  strong {
    font-size: 1.5rem;
    padding: 1rem;
  }
  span {
    margin-top: 1rem;
    color: grey;
    text-align: start;
    padding-bottom: 0.5rem;
  }

  @media (max-width: 365px) {
    width: 17rem;
  } ;
`;

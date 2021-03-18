import styled from "styled-components";

export const DishesContainer = styled.div`
  width: 100%;

  background-color: var(--white);

  display: flex;
  justify-content: space-between;
`;

export const MainContainer = styled.div`
  height: 100%;
  width: 55rem;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: var(--mainText);
  h2 {
    margin-top: 2.5rem;
    font-size: 2rem;
  }

  &:nth-child(1) {
    border-bottom: 1px solid grey;
    width: 25rem;
  }
  @media (max-width: 435px) {
    text-align: center;
  } ;
`;

export const LeftContainer = styled.div`
  width: 12rem;
  height: 22rem;

  padding-left: 0.5rem;
  img {
    width: 100%;
    border-radius: 50px;
  }
  strong {
    font-size: 1.2rem;
    text-align: center;
  }

  display: flex;
  flex-direction: column;

  @media (max-width: 1040px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  width: 12rem;
  height: 22rem;

  padding-right: 0.5rem;
  img {
    width: 100%;
    border-radius: 50px;
  }

  strong {
    font-size: 1.2rem;
    text-align: center;
  }

  display: flex;
  flex-direction: column;
  @media (max-width: 1040px) {
    display: none;
  }
`;

export const DishContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  margin-top: 2.5rem;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;
export const DishCard = styled.div`
  width: 20rem;
  height: 22rem;

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
  }
  span {
    margin-top: 1rem;
    color: grey;
  }

  @media (max-width: 365px) {
    width: 17rem;
  } ;
`;

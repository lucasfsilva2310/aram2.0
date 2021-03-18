import styled from "styled-components";

export const AramContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  @media (max-width: 870px) {
    flex-wrap: wrap;
  }
`;

export const AramImage = styled.img`
  width: 70%;
  min-width: 22rem;
  min-height: 35rem;

  margin: 1rem auto;
  padding: 1rem 2rem;
`;

export const AramTextContainer = styled.div`
  width: 50%;
  min-height: 27rem;

  margin: 2rem auto;

  font-family: var(--mainText);

  @media (max-width: 870px) {
    width: 80%;
  }
  h2 {
    font-size: 2.2rem;
    text-align: center;
    padding: 2rem;
  }
  p {
    line-height: 1.3;
    margin: 1.5rem;
  }
`;

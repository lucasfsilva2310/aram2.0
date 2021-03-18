import styled from "styled-components";

export const AramContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  /* Colocar flex wrap quando quiser responsividade */
`;

export const AramImage = styled.img`
  width: 45rem;
  height: 30rem;

  margin: 1rem auto;
  padding: 1rem 2rem;
`;

export const AramTextContainer = styled.div`
  width: 30rem;
  height: 27rem;

  margin: 2rem auto;

  font-family: var(--mainText);
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

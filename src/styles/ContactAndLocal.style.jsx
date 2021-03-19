import styled from "styled-components";

export const ContactAndLocalContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 3.5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const GoogleMapsContainer = styled.div`
  width: 60%;
  min-width: 30rem;
  margin: 1.5rem;
  h2 {
    text-align: center;
    margin: 1.5rem;
    min-width: 40rem;
  }
  @media (max-width: 1000px) {
    width: 70%;
    min-width: 0;

    h2 {
      min-width: 0;
    }
  }
`;

export const GoogleMaps = styled.div`
  background-color: #5c5a5a;

  height: 25rem;
  width: 100%;
  min-width: 40rem;

  @media (max-width: 1000px) {
    min-width: 0;
  }
  padding: 1rem;
`;

export const FormContainer = styled.div`
  width: 40%;
  h2 {
    text-align: center;
    margin: 1.5rem;
  }

  @media (max-width: 1000px) {
    width: 70%;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 25rem;

  margin-top: 3rem;

  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;

  padding: 1rem;
`;

export const InputsContainer = styled.div`
  width: 100%;
  height: 100%;

  justify-content: space-around;
  align-items: center;

  display: flex;
  flex-direction: column;

  p {
    width: 90%;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  div > span {
    padding: 0.3rem;
  }

  input {
    color: #3c3c3c;
    font-family: var(--mainText);
    background-color: var(--background);
    font-weight: 500;
    font-size: 1.1rem;
    border-radius: 2px;
    line-height: 22px;
    border: 1px solid grey;
    padding: 13px 13px 13px 54px;
    margin-bottom: 10px;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
  }
  textarea {
    background-color: var(--background);
    padding: 13px 13px 13px 54px;
    font-family: var(--mainText);
    font-size: 1.1rem;

    width: 100%;
    height: 150px;
    line-height: 150%;
    resize: vertical;
  }
`;

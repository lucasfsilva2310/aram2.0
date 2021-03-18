import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 4rem;

  position: fixed;
  top: 0;

  display: flex;

  justify-content: space-between;

  background: var(--main);
`;

export const Logo = styled.img`
  width: 7rem;
  height: 90%;
  margin-left: 6rem;
  @media (max-width: 770px) {
    margin-left: 0;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavigationBar = styled.nav`
  width: 100%;

  margin: auto 4rem auto auto;
  ul {
    display: flex;
    justify-content: flex-end;
    font-weight: 600;
    font-family: var(--mainText);
  }
  ul > li {
    display: flex;
    margin: 0 1rem;
    align-items: center;
  }
`;

export const Button = styled.button`
  width: 10rem;
  height: 2.8rem;
  border-radius: 25px;
  border: none;
  outline: none;
  background-color: var(--button);
  color: var(--white);
  font-weight: 600;
`;

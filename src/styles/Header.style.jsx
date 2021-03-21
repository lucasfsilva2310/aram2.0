import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 4rem;

  position: fixed;
  top: 0;

  display: flex;

  justify-content: space-between;

  background: var(--main);

  z-index: 10;
  color: var(--white);

  @media (max-width: 510px) {
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 12rem;
  height: 100%;
  margin-left: 6rem;
  @media (max-width: 770px) {
    margin-left: 0;
  }
  @media (max-width: 600px) {
    display: none;
  }
  @media (max-width: 510px) {
    display: block;
    width: 30%;
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

  ul > li > a {
    transition: transform 0.3s;
  }
  ul > li > a:hover {
    transform: scale(1.2);
  }
  ul > li > a:focus {
    transform: scale(1.2);
  }

  @media (max-width: 510px) {
    display: none;
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

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(1.1);
  }
`;

export const ButtonMobile = styled(Button)`
  display: none;

  @media (max-width: 510px) {
    display: block;
    width: 40%;
  }
`;

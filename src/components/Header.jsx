import {
  Button,
  HeaderContainer,
  Logo,
  NavigationBar,
} from "../styles/Header.style";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="images/Logo1.png" alt="Logo" />
      <NavigationBar>
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Aram</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Localização</a>
          </li>
          <li>
            <Button>Menu</Button>
          </li>
        </ul>
      </NavigationBar>
    </HeaderContainer>
  );
};

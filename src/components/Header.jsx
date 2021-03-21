import { useHistory } from "react-router";
import {
  Button,
  HeaderContainer,
  Logo,
  NavigationBar,
} from "../styles/Header.style";

export const Header = ({ insideMenuPage }) => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <Logo src="images/ara_logo_white.png" alt="Logo" />
      <NavigationBar>
        <ul>
          {insideMenuPage ? (
            <>
              <li>
                <a href="/">Início</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/">Início</a>
              </li>
              <li>
                <a href="#aram">Aram</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
              <li>
                <a href="#contact">Localização</a>
              </li>
              <li>
                <Button onClick={() => history.push("/menu")}>Menu</Button>
              </li>
            </>
          )}
        </ul>
      </NavigationBar>
    </HeaderContainer>
  );
};

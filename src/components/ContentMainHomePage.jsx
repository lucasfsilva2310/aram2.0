import { useHistory } from "react-router-dom";
import { Button } from "../styles/Header.style";

export const ContentMainHomePage = () => {
  const history = useHistory();

  return (
    <>
      <h1>Experimente os sabores da natureza</h1>
      <span>Venha conhecer o menu Aram!</span>
      <Button onClick={() => history.push("/menu")}>Menu</Button>
    </>
  );
};

import { Button } from "../styles/Header.style";
import { MainContainer, TextContainer } from "../styles/MainContent.style";

export const MainContent = () => {
  return (
    <MainContainer>
      <TextContainer>
        <h1>Experimente os sabores da natureza</h1>
        <span>Venha conhecer o menu Aram!</span>
        <Button>Menu</Button>
      </TextContainer>
    </MainContainer>
  );
};

import { MainContainer, TextContainer } from "../styles/MainContent.style";
import { ContentMainHomePage } from "./ContentMainHomePage";

export const MainContent = ({ insideMenuPage, children }) => {
  return (
    <MainContainer insideMenuPage={insideMenuPage}>
      <TextContainer>
        <ContentMainHomePage />
      </TextContainer>
    </MainContainer>
  );
};

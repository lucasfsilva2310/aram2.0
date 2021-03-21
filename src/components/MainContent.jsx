import { MainContainer, TextContainer } from "../styles/MainContent.style";
import Fade from "react-reveal/Fade";

export const MainContent = ({ insideMenuPage, children }) => {
  return (
    <MainContainer insideMenuPage={insideMenuPage}>
      <Fade left duration={1500}>
        <TextContainer>{children}</TextContainer>
      </Fade>
    </MainContainer>
  );
};

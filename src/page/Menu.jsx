import { ContentMainMenuPage } from "../components/ContentMainMenuPage";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { MenuDishes } from "../components/MenuDishes";

export const Menu = () => {
  return (
    <>
      <Header insideMenuPage={true} />
      <MainContent insideMenuPage={true}>
        <ContentMainMenuPage />
      </MainContent>
      <MenuDishes />
      <Footer />
    </>
  );
};

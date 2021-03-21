import { useEffect } from "react";
import { ContentMainMenuPage } from "../components/ContentMainMenuPage";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { MenuDishes } from "../components/MenuDishes";

export const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

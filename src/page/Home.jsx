import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { AramAbout } from "../components/AramAbout";
import { MainDishes } from "../components/MainDishes";
import { ContactAndLocal } from "../components/ContactAndLocal";
import { Footer } from "../components/Footer";
import { ContentMainHomePage } from "../components/ContentMainHomePage";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <MainContent>
        <ContentMainHomePage />
      </MainContent>
      <AramAbout />
      <MainDishes />
      <ContactAndLocal />
      <Footer />
    </>
  );
};

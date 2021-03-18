import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { AramAbout } from "../components/AramAbout";
import { MainDishes } from "../components/MainDishes";
import { ContactAndLocal } from "../components/ContactAndLocal";

export const Home = () => {
  return (
    <>
      <Header />
      <MainContent />
      <AramAbout />
      <MainDishes />
      <ContactAndLocal />
    </>
  );
};

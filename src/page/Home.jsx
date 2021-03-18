import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import { AramAbout } from "../components/AramAbout";
import { MainDishes } from "../components/MainDishes";

export const Home = () => {
  return (
    <>
      <Header />
      <MainContent />
      <AramAbout />
      <MainDishes />
    </>
  );
};

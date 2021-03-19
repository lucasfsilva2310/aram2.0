import { MenuDishesContainer } from "../styles/MenuDishes.style";
import { MenuLeftSide } from "./MenuLeftSide";
import { MenuRightSide } from "./MenuRightSide";

export const MenuDishes = () => {
  return (
    <MenuDishesContainer>
      <MenuLeftSide />
      <MenuRightSide />
    </MenuDishesContainer>
  );
};

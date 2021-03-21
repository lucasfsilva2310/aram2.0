import {
  BordedCard,
  ContainerLeftSide,
  DishCard,
  DishCardDescription,
  ImageCard,
  WhiteCard,
} from "../styles/MenuDishes.style";
import {
  breakfast,
  HamburguersAndPizzas,
  MainDishes,
  salads,
  soups,
  takeaways,
  veggie,
} from "../menu";

import { Fade } from "react-reveal";

export const MenuRightSide = () => {
  return (
    <ContainerLeftSide>
      <Fade top duration={1500}>
        <ImageCard>
          <img src="images/Dishes/cappuccino.jpeg" alt="Capuccino" />
        </ImageCard>
      </Fade>

      <Fade right duration={1500}>
        <BordedCard>
          <h2>Café da Manhã</h2>
          {breakfast.map((dish) => {
            return (
              <DishCard>
                <>
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                  </DishCardDescription>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                </>
              </DishCard>
            );
          })}
        </BordedCard>
      </Fade>
      <Fade right duration={1500}>
        <WhiteCard>
          <h2>Saladas</h2>
          {salads.map((dish) => {
            return (
              <DishCard>
                <>
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                    <strong>R${dish.price}</strong>
                  </DishCardDescription>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                </>
              </DishCard>
            );
          })}
        </WhiteCard>
      </Fade>
      <Fade right duration={1500}>
        <BordedCard>
          <h2>Vegetarianos</h2>
          {veggie.map((dish) => {
            return (
              <DishCard>
                <>
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                    <strong>R${dish.price}</strong>
                  </DishCardDescription>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                </>
              </DishCard>
            );
          })}
        </BordedCard>
      </Fade>
      <Fade right duration={1500}>
        <WhiteCard>
          <h2>Sopas</h2>
          {soups.map((dish) => {
            return (
              <DishCard>
                <>
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                    <strong>R${dish.price}</strong>
                  </DishCardDescription>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                </>
              </DishCard>
            );
          })}
        </WhiteCard>
      </Fade>
      <Fade bottom duration={1500}>
        <ImageCard>
          <img src="images/Dishes/sandwich.jpeg" alt="Capuccino" />
        </ImageCard>
      </Fade>
      <Fade right duration={1500}>
        <WhiteCard>
          <h2>{`Lanches & Pizzas`}</h2>
          {HamburguersAndPizzas.map((dish) => {
            return (
              <DishCard>
                <>
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                    <strong>R${dish.price}</strong>
                  </DishCardDescription>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                </>
              </DishCard>
            );
          })}
        </WhiteCard>
      </Fade>
      <Fade right duration={1500}>
        <WhiteCard>
          <h2>Pratos Executivos</h2>
          <p>Para entregas!</p>
          {takeaways.map((dish) => {
            return (
              <DishCard>
                <>
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                    <strong>R${dish.price}</strong>
                  </DishCardDescription>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                </>
              </DishCard>
            );
          })}
        </WhiteCard>
      </Fade>
    </ContainerLeftSide>
  );
};

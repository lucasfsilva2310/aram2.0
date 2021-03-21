import {
  BordedCard,
  ContainerLeftSide,
  DishCard,
  DishCardDescription,
  ImageCard,
  WhiteCard,
} from "../styles/MenuDishes.style";
import { breakfast, deserts, MainDishes, salads, sandwiches } from "../menu";
import { Fade, Flip } from "react-reveal";

export const MenuLeftSide = () => {
  return (
    <ContainerLeftSide>
      <Fade left duration={1500}>
        <WhiteCard>
          <h2>Pratos Principais</h2>
          {MainDishes.map((dish) => {
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
      <Fade left duration={1500}>
        <ImageCard>
          <img src="images/Dishes/pasta.jpeg" alt="Capuccino" />
        </ImageCard>
      </Fade>
      <Fade left duration={1500}>
        <BordedCard>
          <h2>{`Massas  &  Risotos`}</h2>
          {breakfast.map((dish) => {
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
      <Fade left duration={1500}>
        <BordedCard>
          <h2>Sobremesas</h2>
          {breakfast.map((dish) => {
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
      <Fade bottom duration={1500}>
        <WhiteCard>
          <h2>Sanduíches Frios</h2>
          {sandwiches.map((dish) => {
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
      <Fade left duration={1500}>
        <BordedCard>
          <h2>Sobremesas</h2>
          {deserts.map((dish) => {
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
    </ContainerLeftSide>
  );
};

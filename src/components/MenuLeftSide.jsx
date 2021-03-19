import {
  BordedCard,
  ContainerLeftSide,
  DishCard,
  DishCardDescription,
  ImageCard,
  WhiteCard,
} from "../styles/MenuDishes.style";
import { breakfast, deserts, MainDishes, salads, sandwiches } from "../menu";

export const MenuLeftSide = () => {
  return (
    <ContainerLeftSide>
      <WhiteCard>
        <h2>Pratos Principais</h2>
        {MainDishes.map((dish) => {
          return (
            <DishCard>
              {dish.imgleft === true ? (
                <>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                    <strong>R${dish.price}</strong>
                  </DishCardDescription>{" "}
                </>
              ) : (
                <>
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                    <strong>R${dish.price}</strong>
                  </DishCardDescription>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                </>
              )}
            </DishCard>
          );
        })}
      </WhiteCard>
      <ImageCard>
        <img src="images/Dishes/pasta.jpeg" alt="Capuccino" />
      </ImageCard>
      <BordedCard>
        <h2>{`Massas  &  Risotos`}</h2>
        {breakfast.map((dish) => {
          return (
            <DishCard>
              {dish.imgleft === true ? (
                <>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                    <strong>R${dish.price}</strong>
                  </DishCardDescription>{" "}
                </>
              ) : (
                <>
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                    <strong>R${dish.price}</strong>
                  </DishCardDescription>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                </>
              )}
            </DishCard>
          );
        })}
      </BordedCard>
      <BordedCard>
        <h2>Sobremesas</h2>
        {breakfast.map((dish) => {
          return (
            <DishCard>
              {dish.imgleft === true ? (
                <>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                    <strong>R${dish.price}</strong>
                  </DishCardDescription>{" "}
                </>
              ) : (
                <>
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                    <strong>R${dish.price}</strong>
                  </DishCardDescription>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                </>
              )}
            </DishCard>
          );
        })}
      </BordedCard>
      <WhiteCard>
        <h2>Sanduíches Frios</h2>
        {sandwiches.map((dish) => {
          return (
            <DishCard>
              {dish.imgleft === true ? (
                <>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                    <strong>R${dish.price}</strong>
                  </DishCardDescription>{" "}
                </>
              ) : (
                <>
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                    <strong>R${dish.price}</strong>
                  </DishCardDescription>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                </>
              )}
            </DishCard>
          );
        })}
      </WhiteCard>
      <BordedCard>
        <h2>Sobremesas</h2>
        {deserts.map((dish) => {
          return (
            <DishCard>
              {dish.imgleft === true ? (
                <>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                    <strong>R${dish.price}</strong>
                  </DishCardDescription>{" "}
                </>
              ) : (
                <>
                  <DishCardDescription>
                    <h3>{dish.name}</h3>
                    <span>{dish.description}</span>
                    <strong>R${dish.price}</strong>
                  </DishCardDescription>
                  {dish.image && <img src={dish.image} alt={dish.name} />}
                </>
              )}
            </DishCard>
          );
        })}
      </BordedCard>
    </ContainerLeftSide>
  );
};

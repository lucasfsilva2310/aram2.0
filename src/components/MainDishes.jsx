import {
  DishCard,
  DishesContainer,
  LeftContainer,
  MainContainer,
  RightContainer,
  DishContainer,
} from "../styles/MainDishes.styles";

export const MainDishes = () => {
  return (
    <DishesContainer>
      <LeftContainer>
        <strong>Temos café da manhã à vontade!</strong>
        <img src="images/dishExample.jpeg" alt="café da manhã" />
      </LeftContainer>

      <MainContainer>
        <h2>Os melhores pratos avaliados </h2>
        <span>Também temos pratos vegetarianos / veganos</span>
        <DishContainer>
          {dishes.map((dish) => {
            return (
              <DishCard>
                <img src={dish.image} alt={dish.name} />
                <strong>{dish.name}</strong>
                <span>{dish.description}</span>
              </DishCard>
            );
          })}
        </DishContainer>
      </MainContainer>
      <RightContainer>
        <strong>Marmitas para viagem!</strong>
        <img src="images/dishExample.jpeg" alt="café da manhã" />
      </RightContainer>
    </DishesContainer>
  );
};

const dishes = [
  {
    image: "images/dishExample.jpeg",
    name: "prato 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ut quam nihil magnam totam suscipit molestias unde",
  },
  {
    image: "images/dishExample.jpeg",
    name: "prato 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ut quam nihil magnam totam suscipit molestias unde",
  },
  {
    image: "images/dishExample.jpeg",
    name: "prato 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ut quam nihil magnam totam suscipit molestias unde",
  },
];

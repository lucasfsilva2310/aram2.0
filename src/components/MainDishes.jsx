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
      <MainContainer>
        <div>
          <h2>Os melhores pratos avaliados </h2>
          <span>Também temos pratos vegetarianos / veganos</span>
        </div>
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
    </DishesContainer>
  );
};

const dishes = [
  {
    image: "images//Dishes/dishExample.jpeg",
    name: "prato 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ut quam nihil magnam totam suscipit molestias unde",
  },
  {
    image: "images//Dishes/dishExample.jpeg",
    name: "prato 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ut quam nihil magnam totam suscipit molestias unde",
  },
  {
    image: "images//Dishes/dishExample.jpeg",
    name: "prato 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore ut quam nihil magnam totam suscipit molestias unde",
  },
];

import {
  AramImage,
  AramContainer,
  AramTextContainer,
} from "../styles/AramAbout.style";

export const AramAbout = () => {
  return (
    <AramContainer id="aram">
      <AramImage src="images/aramAboutImg.png" alt="ambiente" />
      <AramTextContainer>
        <h2>Sobre Nós</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque unde
          provident temporibus, impedit quibusdam harum vitae quia maiores
          mollitia quam.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque unde
          provident temporibus, impedit quibusdam harum vitae quia maiores
          mollitia quam.Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Itaque unde provident temporibus, impedit quibusdam harum vitae
          quia maiores mollitia quam.
        </p>
      </AramTextContainer>
    </AramContainer>
  );
};

import {
  AramImage,
  AramContainer,
  AramTextContainer,
} from "../styles/AramAbout.style";

import Fade from "react-reveal/Fade";

export const AramAbout = () => {
  return (
    <AramContainer id="aram">
      <Fade left duration={1500}>
        <AramImage src="images/aramAboutImg.png" alt="ambiente" />
      </Fade>
      <Fade right duration={1500}>
        <AramTextContainer>
          <h2>Sobre Nós</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            unde provident temporibus, impedit quibusdam harum vitae quia
            maiores mollitia quam.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            unde provident temporibus, impedit quibusdam harum vitae quia
            maiores mollitia quam.Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Itaque unde provident temporibus, impedit
            quibusdam harum vitae quia maiores mollitia quam.
          </p>
        </AramTextContainer>
      </Fade>
    </AramContainer>
  );
};

import {
  FooterContainer,
  Media,
  RightsContainer,
  SocialMedias,
} from "../styles/Footer.style";

export const Footer = () => {
  return (
    <FooterContainer>
      <RightsContainer>Todos os direitos reservados.</RightsContainer>
      <SocialMedias>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/Aram-Bar-e-Restaurante-110312737117140/?view_public_for=110312737117140"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/cute-clipart/64/000000/whatsapp.png"
                alt="WhatsApp"
              />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5511954987031&text=Ola!"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/cute-clipart/64/000000/facebook.png"
                alt="Facebook"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/arambarerestaurante/"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/cute-clipart/30/000000/instagram-new.png"
                alt="Instagram"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.ifood.com.br/delivery/sao-paulo-sp/aram-bistro-cafe-e-bar-planalto-paulista/09b8e5e7-95cc-4c31-8995-ca31edc086d9"
              target="_blank"
            >
              <img src="images/Ifood-minilogo.png" alt="Ifood" />
            </a>
          </li>
        </ul>
      </SocialMedias>
    </FooterContainer>
  );
};

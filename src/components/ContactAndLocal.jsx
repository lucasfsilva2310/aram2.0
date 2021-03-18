import {
  ContactAndLocalContainer,
  Form,
  FormContainer,
  GoogleMaps,
  GoogleMapsContainer,
  InputsContainer,
} from "../styles/ContactAndLocal.style";

import { TextField } from "@material-ui/core";
import { Button } from "../styles/Header.style";

export const ContactAndLocal = () => {
  return (
    <ContactAndLocalContainer>
      <GoogleMapsContainer>
        <h2>Localização</h2>
        <GoogleMaps />
      </GoogleMapsContainer>
      <FormContainer>
        <h2>Contato</h2>
        <Form>
          <InputsContainer>
            <p>
              <input name="name" type="text" placeholder="Name" />
            </p>

            <p>
              <input name="email" type="text" placeholder="Email" />
            </p>

            <p class="text">
              <textarea name="text" placeholder="Mensagem"></textarea>
            </p>

            <div>
              <Button type="submit" value="Enviar">
                Enviar
              </Button>
            </div>
          </InputsContainer>
        </Form>
      </FormContainer>
    </ContactAndLocalContainer>
  );
};

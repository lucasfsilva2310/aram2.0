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

import { sendForm } from "emailjs-com";
import { useState } from "react";

export const ContactAndLocal = () => {
  const [wasFormSent, setWasFormSent] = useState(false);

  function onSubmit(data) {
    document.body.style.cursor = "wait";
    data.preventDefault();

    sendForm(
      "aram_form",
      "aram_form_template",
      data.target,
      "user_mPU9p33FjIwjo8jm59LJf"
    )
      .then((res) => {
        console.log(res.text);
        document.body.style.cursor = "default";
        setWasFormSent(true);
        setTimeout(() => setWasFormSent(false), 4000);
      })
      .catch((res) => console.log(res.text));
  }
  return (
    <ContactAndLocalContainer id="contact">
      <GoogleMapsContainer>
        <h2>Localização</h2>
        <GoogleMaps />
      </GoogleMapsContainer>
      <FormContainer>
        <h2>Contato</h2>
        <Form onSubmit={onSubmit}>
          <InputsContainer>
            <p>
              <input name="name" type="text" placeholder="Name" />
            </p>

            <p>
              <input name="email" type="email" placeholder="Email" />
            </p>

            <p class="text">
              <textarea name="text" placeholder="Mensagem"></textarea>
            </p>

            <div>
              {wasFormSent ? <span>Mensagem Enviada!</span> : ""}
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

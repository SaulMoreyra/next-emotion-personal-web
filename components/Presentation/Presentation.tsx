import { useTheme } from "@emotion/react";
import React from "react";
import {
  IconFacebook,
  IconGithub,
  IconInstagram,
  IconLinkedin,
} from "../../icons";
import Button from "../Button";
import { SimpleLink } from "../Link";
import {
  ContainerStyled,
  BaseContainer,
  Greeting,
  TextContainer,
  Profession,
  GeneralText,
  IconContainer,
  ButtonContainer,
} from "./Presentation.styled";

const Presentation = () => {
  const theme = useTheme();

  const color = theme.isDark ? theme.primary.main : theme.black;

  return (
    <ContainerStyled>
      <BaseContainer>
        <IconContainer>
          <IconFacebook color={color} />
        </IconContainer>
        <IconContainer>
          <IconInstagram color={color} />
        </IconContainer>
        <IconContainer>
          <IconGithub color={color} />
        </IconContainer>
        <IconContainer>
          <IconLinkedin color={color} />
        </IconContainer>
      </BaseContainer>
      <TextContainer>
        <Greeting>¡Hola! Soy Saúl Moreyra</Greeting>
        <Profession>Fullstack Developer</Profession>
        <GeneralText>Soy de la Ciudad de Oaxaca en México 🇲🇽</GeneralText>
        <GeneralText>
          Estudié Ingeniería en Sistemas Computacionales y actualmente tengo 3
          años de experiencia en el mundo del desarrollo web y móvil. Aunque
          aveces me estreso en el proceso, me apasiona aprender nuevas
          tecnológias 😅.
        </GeneralText>
        <GeneralText>
          Cuando no estoy programando y tengo ganas hago streams de videojuegos
          (puedes seguirme{" "}
          <SimpleLink
            href="https://www.facebook.com/ARMHAStreams"
            target="_blank"
          >
            aqui
          </SimpleLink>
          )
        </GeneralText>
        <GeneralText>
          He participado en multiples proyectos como freelance y actualmente soy
          desarrollador fullstack en{" "}
          <SimpleLink href="https://www.fintecimal.com/" target="_blank">
            Fintecimal
          </SimpleLink>
          . Si estas buscando alguién con quien codear yo soy el indicado!.
        </GeneralText>
        <ButtonContainer>
          <Button type="primary">Contáctame</Button>
        </ButtonContainer>
      </TextContainer>
    </ContainerStyled>
  );
};

export default Presentation;

import { useTheme } from "@emotion/react";
import React, { Fragment } from "react";
import {
  IconArrow,
  IconFacebook,
  IconGithub,
  IconInstagram,
  IconLinkedin,
} from "../Icons";
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

const icons = [
  { href: "https://www.facebook.com/saulrmoreyra/", icon: IconFacebook },
  { href: "https://www.instagram.com/saul.moreyra/", icon: IconInstagram },
  { href: "https://github.com/SaulMoreyra", icon: IconGithub },
  { href: "https://www.linkedin.com/in/saulrmoreyra/", icon: IconLinkedin },
];

const Presentation = () => {
  const theme = useTheme();
  const color = theme.isDark ? theme.primary.main : theme.black;

  return (
    <ContainerStyled>
      <BaseContainer>
        {icons.map(({ href, icon: Icon }, index) => (
          <IconContainer
            key={`icon-container-${index}`}
            href={href}
            target="_blank"
          >
            <Icon color={color} />
          </IconContainer>
        ))}
      </BaseContainer>
      <TextContainer>
        <Greeting>¡Hola! Soy Saúl Moreyra</Greeting>
        <Profession>Fullstack Developer</Profession>
        <GeneralText>Oaxaca, México</GeneralText>
        <GeneralText>Soy Ingeniero en Sistemas Computacionales.</GeneralText>
        <GeneralText>
          Si estas buscando alguién con quien codear yo soy el indicado!.
        </GeneralText>
        <ButtonContainer>
          <Button type="primary" endIcon={IconArrow}>
            Contáctame
          </Button>
        </ButtonContainer>
      </TextContainer>
    </ContainerStyled>
  );
};

export default Presentation;

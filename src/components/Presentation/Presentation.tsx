import React from "react";
import { useTheme } from "@emotion/react";
import {
  IconArrowNext,
  IconArrowDown,
  IconFacebook,
  IconGithub,
  IconInstagram,
  IconLinkedin,
} from "../Icons";
import Button from "../Button";
import {
  ContainerStyled,
  TextContainer,
  ButtonContainer,
  IconsContainer,
} from "./Presentation.styled";
import Text from "components/Text";
import IconButton from "components/IconButton";
import IconLink from "components/IconLink";
import useMenu from "hooks/useMenu";

const icons = [
  { href: "https://www.facebook.com/saulrmoreyra/", icon: IconFacebook },
  { href: "https://www.instagram.com/saul.moreyra/", icon: IconInstagram },
  { href: "https://github.com/SaulMoreyra", icon: IconGithub },
  { href: "https://www.linkedin.com/in/saulrmoreyra/", icon: IconLinkedin },
];

const Presentation = () => {
  const menu = useMenu();
  return (
    <ContainerStyled>
      <IconsContainer>
        {icons.map(({ href, icon: Icon }, index) => (
          <IconLink
            key={`icon-container-${index}`}
            href={href}
            target="_blank"
            icon={Icon}
          />
        ))}
      </IconsContainer>
      <TextContainer>
        <Text variant="title">¡Hola! Soy Saúl Moreyra</Text>
        <Text variant="subtitle">Fullstack Developer</Text>
        <Text variant="body">Oaxaca, México</Text>
        <Text variant="body">
          Soy Ingeniero en Sistemas Computacionales, egresado del TecNM Campus
          Oaxaca.
        </Text>
        <Text variant="body">
          No me gusta trabajar solo, si estas buscando alguién con quien codear
          yo soy el indicado!.
        </Text>
        <ButtonContainer>
          <Button type="primary" endIcon={IconArrowNext}>
            Contáctame
          </Button>
          <IconButton icon={IconArrowDown} circular onClick={menu.next} />
        </ButtonContainer>
      </TextContainer>
    </ContainerStyled>
  );
};

export default Presentation;

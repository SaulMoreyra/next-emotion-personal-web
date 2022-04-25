import IconButton from "components/IconButton";
import IconLink from "components/IconLink";
import Text from "components/Text";
import useMenu from "hooks/useMenu";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Button from "../Button";
import {
  IconArrowDown,
  IconArrowNext,
  IconFacebook,
  IconGithub,
  IconInstagram,
  IconLinkedin,
} from "../Icons";
import {
  ButtonContainer,
  ContainerStyled,
  IconsContainer,
  TextContainer,
} from "./Presentation.styled";

const icons = [
  { href: "https://www.facebook.com/saulrmoreyra/", icon: IconFacebook },
  { href: "https://www.instagram.com/saul.moreyra/", icon: IconInstagram },
  { href: "https://github.com/SaulMoreyra", icon: IconGithub },
  { href: "https://www.linkedin.com/in/saulrmoreyra/", icon: IconLinkedin },
];

const Presentation = () => {
  const menu = useMenu();
  const { t } = useTranslation("presentation");
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
        <Text variant="title">{t("hello")}</Text>
        <Text variant="subtitle">{t("role")}</Text>
        <Text variant="body">{t("place")}</Text>
        <Text variant="body">{t("intro")}</Text>
        <Text variant="body">{t("outtro")}</Text>
        <ButtonContainer>
          <Button type="primary" endIcon={IconArrowNext}>
            {t("contact")}
          </Button>
          <IconButton icon={IconArrowDown} circular onClick={menu.next} />
        </ButtonContainer>
      </TextContainer>
    </ContainerStyled>
  );
};

export default Presentation;

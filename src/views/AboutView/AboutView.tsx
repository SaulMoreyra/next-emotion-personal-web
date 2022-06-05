import IconLink from "components/IconLink";
import {
  IconExpress,
  IconMongo,
  IconNode,
  IconReact,
  IconTrinagles
} from "components/Icons";
import { SimpleLink } from "components/Link";
import Text from "components/Text";
import { useTranslation } from "next-i18next";
import React from "react";
import {
  AboutContainer, IconsContainer, TextContainer, TitleContainer,
  TringlesContainer
} from "./AboutView.styled";

const AboutView = React.forwardRef((_, ref) => {
  const { t } = useTranslation("about")

  return (
    <AboutContainer ref={ref}>
      <TitleContainer>
        <Text variant="subtitle">{t("title")}</Text>
        <Text variant="body">{t("subtitle")}</Text>
      </TitleContainer>
      <TringlesContainer>
        <IconTrinagles />
      </TringlesContainer>
      <TextContainer>
        <Text variant="body">
          {t("currently")}
        </Text>
        <Text variant="body">
          {t("jobs")}{" "}
          👉
          <SimpleLink href="https://www.skydropx.com/" target="_blank">
            Skydropx
          </SimpleLink>
          👈
        </Text>
        <Text variant="body">
          {t("before")}{" "}
          <SimpleLink href="https://www.fintecimal.com/" target="_blank">
            Fintecimal
          </SimpleLink>
          💕
        </Text>
        <Text variant="body" align="center">
          {t("tecnologies")}
        </Text>
        <IconsContainer>
          <IconLink icon={IconMongo} />
          <IconLink icon={IconExpress} />
          <IconLink icon={IconReact} />
          <IconLink icon={IconNode} />
        </IconsContainer>
      </TextContainer>
    </AboutContainer>
  );
});

AboutView.displayName = "AboutView";

export default AboutView;

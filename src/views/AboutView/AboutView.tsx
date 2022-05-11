import IconLink from "components/IconLink";
import {
  IconExpress,
  IconMongo,
  IconNode,
  IconReact,
  IconTrinagles,
} from "components/Icons";
import { SimpleLink } from "components/Link";
import Text from "components/Text";
import React, { Fragment } from "react";
import {
  AboutContainer,
  TitleContainer,
  TringlesContainer,
  TextContainer,
  IconsContainer,
} from "./AboutView.styled";

const AboutView = React.forwardRef((_, ref) => {
  return (
    <AboutContainer ref={ref}>
      <TitleContainer>
        <Text variant="subtitle">Sobre Mi</Text>
        <Text variant="body">Presentación</Text>
      </TitleContainer>
      <TringlesContainer>
        <IconTrinagles />
      </TringlesContainer>
      <TextContainer>
        <Text variant="body">
          Actualmente tengo 3 años de experiencia en el mundo del desarrollo web
          y móvil. Me apasiona aprender nuevas tecnológias.
        </Text>
        <Text variant="body">
          He participado en multiples proyectos como freelance y actualmente soy
          desarrollador fullstack en{" "}
          <SimpleLink href="https://www.fintecimal.com/" target="_blank">
            Fintecimal
          </SimpleLink>
        </Text>
        <Text variant="body" align="center">
          Mis tecnologias favoritas
        </Text>
        <IconsContainer>
          <IconLink icon={IconMongo} />
          <IconLink icon={IconExpress} />
          <IconLink icon={IconReact} />
          <IconLink icon={IconNode} />
        </IconsContainer>
        <Text variant="body">
          Cuando no estoy programando o aprendiendo algo nuevo, me encanta jugar
          videojuegos como Fortnite, Gears 5 o Warzone. Mi videojuego favorito
          de la vida es Gears of War 3.
        </Text>
        <Text variant="body">
          Si quieres pasarte por mi página de streams puedes seguirme{" "}
          <SimpleLink
            href="https://www.facebook.com/ARMHAStreams"
            target="_blank"
          >
            aqui
          </SimpleLink>
          , pero debo advertirte que no hago stream muy seguido.
        </Text>
      </TextContainer>
    </AboutContainer>
  );
});

AboutView.displayName = "AboutView";

export default AboutView;

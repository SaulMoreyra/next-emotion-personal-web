import ButtonTheme from "components/ButtonTheme";
import Link from "components/Link";
import { LinksContainerStyled } from "./HeaderWeb.styled";

const HeaderWeb = () => {
  return (
    <LinksContainerStyled>
      <Link active={true}>Inicio</Link>
      <Link>Sobre mi</Link>
      <Link>Experiencia</Link>
      <Link>Portafolio</Link>
      <Link>Contactame</Link>
      <ButtonTheme />
    </LinksContainerStyled>
  );
};
export default HeaderWeb;

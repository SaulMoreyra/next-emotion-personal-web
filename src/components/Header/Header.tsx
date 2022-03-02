import Logo from "components/Logo";
import { NavContainerStyled, NavStyled } from "./Header.styled";
import useMediaQuery from "hooks/useMediaQuery";
import HeaderWeb from "../HeaderWeb";
import HeaderMobile from "../HeaderMobile";

const Header = () => {
  const matchQuery = useMediaQuery("min-width", 960);
  return (
    <NavContainerStyled>
      <NavStyled>
        <Logo />
        {matchQuery ? <HeaderWeb /> : <HeaderMobile />}
      </NavStyled>
    </NavContainerStyled>
  );
};
export default Header;

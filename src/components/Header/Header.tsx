import Logo from "components/Logo";
import { NavStyled } from "./Header.styled";
import useMediaQuery from "hooks/useMediaQuery";
import HeaderWeb from "../HeaderWeb";
import HeaderMobile from "../HeaderMobile";

const Header = () => {
  const matchQuery = useMediaQuery("min-width", 960);

  console.log(matchQuery);
  return (
    <NavStyled>
      <Logo />
      {matchQuery ? <HeaderWeb /> : <HeaderMobile />}
    </NavStyled>
  );
};
export default Header;

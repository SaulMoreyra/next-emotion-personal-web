import { useContext } from "react";
import { IconMoon, IconSun } from "../../icons";
import { ThemeChangeContext } from "../../providers/ThemeProvider";
import IconButton from "../IconButton/IconButton";
import Link from "../Link";
import Logo from "../Logo";
import { NavStyled, LinksContainerStyled } from "./Header.styled";

const Header = () => {
  const { isDark, toggleMode } = useContext(ThemeChangeContext);
  return (
    <NavStyled>
      <Logo />
      <LinksContainerStyled>
        <Link active={true}>Home</Link>
        <Link>Home</Link>
        <Link>Home</Link>
        <Link>Home</Link>
        <Link>Home</Link>
        <IconButton onClick={toggleMode} icon={isDark ? IconSun : IconMoon} />
      </LinksContainerStyled>
    </NavStyled>
  );
};
export default Header;

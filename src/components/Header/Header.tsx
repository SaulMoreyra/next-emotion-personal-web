"use client";

import Logo from "components/Logo";
import { NavContainerStyled, NavStyled } from "./Header.styled";
import useMediaQuery from "hooks/useMediaQuery";
import HeaderWeb from "../HeaderWeb";
import HeaderMobile from "../HeaderMobile";
import { useNav } from "providers/NavProvider";
import { useTranslations } from "next-intl";

const Header = () => {
  const matchQuery = useMediaQuery("min-width", 1024);
  const { scrollTo } = useNav();
  const t = useTranslations("common");

  return (
    <NavContainerStyled>
      <NavStyled aria-label="Main navigation">
        <Logo
          ariaLabel={t("logoHome")}
          onClick={(event) => {
            event.preventDefault();
            scrollTo("hero");
          }}
        />
        {matchQuery ? <HeaderWeb /> : <HeaderMobile />}
      </NavStyled>
    </NavContainerStyled>
  );
};

export default Header;

import React, { Fragment, useEffect, useState } from "react";
import IconButton from "components/IconButton";
import { IconExit, IconHamburger } from "components/Icons";
import {
  HeaderContainerStyled,
  LinksContainerStyled,
  SideBarStyled,
  LanguageContainer,
} from "./HeaderMobile.style";
import ButtonTheme from "components/ButtonTheme";
import Switch from "components/Switch";
import LinkMobile from "components/LinkMobile";
import useMenu from "hooks/useMenu";

const HeaderMobile = () => {
  const menu = useMenu();
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("es");
  const handleOpen = () => setOpen(!open);
  const handleLanguage = (selected: boolean) => {
    setLanguage(selected ? "en" : "es");
  };

  return (
    <Fragment>
      <LinksContainerStyled>
        <IconButton
          onClick={handleOpen}
          type="secondary"
          icon={IconHamburger}
        />
      </LinksContainerStyled>
      <SideBarStyled open={open}>
        <HeaderContainerStyled>
          <IconButton onClick={handleOpen} type="secondary" icon={IconExit} />
          <ButtonTheme />
        </HeaderContainerStyled>
        <LanguageContainer>
          <Switch
            selected={language !== "es"}
            optionOne="English"
            optionTwo="Spanish"
            onClick={handleLanguage}
          />
        </LanguageContainer>
        {menu.items.map((item, index) => (
          <LinkMobile
            key={`menu_mobile-${index}`}
            active={index === menu.active}
          >
            {item}
          </LinkMobile>
        ))}
      </SideBarStyled>
    </Fragment>
  );
};

export default HeaderMobile;

import ButtonTheme from "components/ButtonTheme";
import IconButton from "components/IconButton";
import { IconExit, IconHamburger } from "components/Icons";
import LinkMobile from "components/LinkMobile";
import Switch from "components/Switch";
import useMenu from "hooks/useMenu";
import React, { Fragment, useCallback, useState } from "react";
import {
  BakdropStyled,
  HeaderContainerStyled,
  LanguageContainer,
  LinksContainerStyled,
  SideBarStyled,
} from "./HeaderMobile.style";

const HeaderMobile = () => {
  const menu = useMenu();
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("es");
  const handleOpen = () => setOpen(!open);
  const handleLanguage = (selected: boolean) => {
    setLanguage(selected ? "en" : "es");
  };

  const handleOnClick = useCallback(
    (index: number) => {
      menu.set(index);
      menu.move(index);
    },
    [menu]
  );

  return (
    <Fragment>
      <LinksContainerStyled>
        <IconButton
          onClick={handleOpen}
          type="secondary"
          icon={IconHamburger}
        />
        <BakdropStyled open={open} onClick={handleOpen} />
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
            onClick={() => handleOnClick(index)}
          >
            {item}
          </LinkMobile>
        ))}
      </SideBarStyled>
    </Fragment>
  );
};

export default HeaderMobile;

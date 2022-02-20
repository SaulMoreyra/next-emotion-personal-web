import React, { Fragment, useEffect, useState } from "react";
import IconButton from "components/IconButton";
import { IconExit, IconHamburger } from "components/Icons";
import {
  HeaderContainerStyled,
  LinksContainerStyled,
  SideBarStyled,
  SideContainerItemStyled,
} from "./HeaderMobile.style";
import ButtonTheme from "components/ButtonTheme";
import Switch from "components/Switch";

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("es");
  const handleOpen = () => setOpen(!open);
  const handleLanguage = (selected: boolean) => {
    setLanguage(selected ? "en" : "es");
  };

  useEffect(() => {
    if (!document) return;
    if (open) document.body.style.overflow = "hidden";
  }, [open]);

  console.log(language);

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
        <SideContainerItemStyled>
          <Switch
            selected={language !== "es"}
            optionOne="English"
            optionTwo="Spanish"
            onClick={handleLanguage}
          />
        </SideContainerItemStyled>
      </SideBarStyled>
    </Fragment>
  );
};

export default HeaderMobile;

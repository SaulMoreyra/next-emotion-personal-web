"use client";

import ThemeToggle from "components/ThemeToggle";
import IconButton from "components/IconButton";
import { IconExit, IconHamburger } from "components/Icons";
import LinkMobile from "components/LinkMobile";
import Switch from "components/Switch";
import { useNav } from "providers/NavProvider";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "i18n/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  BakdropStyled,
  HeaderContainerStyled,
  LanguageContainer,
  LinksContainerStyled,
  SideBarStyled,
} from "./HeaderMobile.style";

const HeaderMobile = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { sections, activeSection, scrollTo } = useNav();
  const t = useTranslations("common");
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleOnClick = useCallback(
    (id: (typeof sections)[number]["id"]) => {
      scrollTo(id);
      setOpen(false);
    },
    [scrollTo]
  );

  const handleLanguage = (selected: boolean) => {
    const lng = selected ? "en" : "es";
    router.replace(pathname, { locale: lng });
  };

  const drawer =
    mounted && open
      ? createPortal(
          <>
            <BakdropStyled open={open} onClick={() => setOpen(false)} />
            <SideBarStyled open={open}>
              <HeaderContainerStyled>
                <IconButton
                  onClick={() => setOpen(false)}
                  type="secondary"
                  icon={IconExit}
                  ariaLabel={t("closeMenu")}
                />
                <ThemeToggle />
              </HeaderContainerStyled>
              <LanguageContainer>
                <Switch
                  selected={locale !== "es"}
                  optionOne="English"
                  optionTwo="Spanish"
                  onClick={handleLanguage}
                />
              </LanguageContainer>
              {sections.map(({ id, labelKey }) => (
                <LinkMobile
                  key={id}
                  href={`#${id}`}
                  active={id === activeSection}
                  aria-current={id === activeSection ? "page" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    handleOnClick(id);
                  }}
                >
                  {t(labelKey)}
                </LinkMobile>
              ))}
            </SideBarStyled>
          </>,
          document.body
        )
      : null;

  return (
    <>
      <LinksContainerStyled>
        <IconButton
          onClick={() => setOpen(true)}
          type="secondary"
          icon={IconHamburger}
          ariaLabel={t("openMenu")}
        />
      </LinksContainerStyled>
      {drawer}
    </>
  );
};

export default HeaderMobile;

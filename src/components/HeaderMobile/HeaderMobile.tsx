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
  BottomSheetStyled,
  HeaderContainerStyled,
  LanguageContainer,
  LinksContainerStyled,
  NavLinks,
  SheetHandle,
} from "./HeaderMobile.style";

const DRAWER_TRANSITION_MS = 350;

const HeaderMobile = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { sections, activeSection, scrollTo } = useNav();
  const t = useTranslations("common");
  const [open, setOpen] = useState(false);
  const [renderDrawer, setRenderDrawer] = useState(false);
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

  useEffect(() => {
    if (!open && renderDrawer) {
      const timeout = window.setTimeout(
        () => setRenderDrawer(false),
        DRAWER_TRANSITION_MS
      );
      return () => window.clearTimeout(timeout);
    }
  }, [open, renderDrawer]);

  const openDrawer = useCallback(() => {
    setRenderDrawer(true);
    requestAnimationFrame(() => setOpen(true));
  }, []);

  const closeDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOnClick = useCallback(
    (id: (typeof sections)[number]["id"]) => {
      scrollTo(id);
      closeDrawer();
    },
    [scrollTo, closeDrawer]
  );

  const handleLanguage = (selected: boolean) => {
    const lng = selected ? "en" : "es";
    router.replace(pathname, { locale: lng });
  };

  const drawer =
    mounted && renderDrawer
      ? createPortal(
          <>
            <BakdropStyled open={open} onClick={closeDrawer} aria-hidden />
            <BottomSheetStyled
              open={open}
              role="dialog"
              aria-modal="true"
              aria-label={t("navigationMenu")}
            >
              <SheetHandle aria-hidden />
              <HeaderContainerStyled>
                <IconButton
                  onClick={closeDrawer}
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
              <NavLinks>
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
              </NavLinks>
            </BottomSheetStyled>
          </>,
          document.body
        )
      : null;

  return (
    <>
      <LinksContainerStyled>
        <IconButton
          onClick={openDrawer}
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

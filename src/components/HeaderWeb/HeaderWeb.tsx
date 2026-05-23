"use client";

import ThemeToggle from "components/ThemeToggle";
import Link from "components/Link";
import Switch from "components/Switch";
import { useNav } from "providers/NavProvider";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "i18n/navigation";
import { useCallback } from "react";
import { HeaderControls, LinksContainerStyled } from "./HeaderWeb.styled";

const HeaderWeb = () => {
  const { sections, activeSection, scrollTo } = useNav();
  const t = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguage = useCallback(
    (selected: boolean) => {
      const lng = selected ? "en" : "es";
      router.replace(pathname, { locale: lng });
    },
    [router, pathname]
  );

  return (
    <LinksContainerStyled>
      {sections.map(({ id, labelKey }) => (
        <Link
          key={id}
          href={`#${id}`}
          active={id === activeSection}
          onClick={(event) => {
            event.preventDefault();
            scrollTo(id);
          }}
        >
          {t(labelKey)}
        </Link>
      ))}
      <HeaderControls>
        <Switch
          compact
          selected={locale !== "es"}
          optionOne="EN"
          optionTwo="ES"
          onClick={handleLanguage}
        />
        <ThemeToggle />
      </HeaderControls>
    </LinksContainerStyled>
  );
};

export default HeaderWeb;

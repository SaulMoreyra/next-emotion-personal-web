"use client";

import IconButton from "components/IconButton";
import { IconMoon, IconSun } from "components/Icons";
import { ThemeChangeContext } from "providers/ThemeProvider";
import { useContext } from "react";
import { useTranslations } from "next-intl";

const ButtonTheme = () => {
  const { isDark, toggleMode } = useContext(ThemeChangeContext);
  const t = useTranslations("common");

  return (
    <IconButton
      onClick={toggleMode}
      icon={isDark ? IconSun : IconMoon}
      ariaLabel={isDark ? t("switchToLight") : t("switchToDark")}
    />
  );
};

export default ButtonTheme;

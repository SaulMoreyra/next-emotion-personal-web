"use client";

import { IconMoon, IconSun } from "components/Icons";
import { ThemeChangeContext } from "providers/ThemeProvider";
import { useContext } from "react";
import { useTranslations } from "next-intl";
import {
  ToggleButton,
  ToggleIcon,
  ToggleSlider,
} from "./ThemeToggle.styled";

const ThemeToggle = () => {
  const { isDark, toggleMode } = useContext(ThemeChangeContext);
  const t = useTranslations("common");

  return (
    <ToggleButton
      type="button"
      onClick={toggleMode}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? t("switchToLight") : t("switchToDark")}
    >
      <ToggleSlider $isDark={isDark} />
      <ToggleIcon $active={!isDark}>
        <IconSun size={16} color="currentColor" />
      </ToggleIcon>
      <ToggleIcon $active={isDark}>
        <IconMoon size={16} color="currentColor" />
      </ToggleIcon>
    </ToggleButton>
  );
};

export default ThemeToggle;

import React from "react";
import IconButton from "components/IconButton";
import { useContext } from "react";
import { IconMoon, IconSun } from "components/Icons";
import { ThemeChangeContext } from "providers/ThemeProvider";

const ButtonTheme = () => {
  const { isDark, toggleMode } = useContext(ThemeChangeContext);
  return <IconButton onClick={toggleMode} icon={isDark ? IconSun : IconMoon} />;
};

export default ButtonTheme;

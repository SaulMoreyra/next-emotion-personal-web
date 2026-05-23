"use client";

import { createContext, useCallback, useEffect, useState } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import Themes from "../theme";
import { ProviderProps } from "interfaces/Provider";

const STORAGE_KEY = "theme-preference";

export const ThemeChangeContext = createContext({
  isDark: false,
  toggleMode: () => {},
});

const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const ThemeProvider = ({ children }: ProviderProps) => {
  const [isDark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setDark(getInitialTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark, mounted]);

  const toggleMode = useCallback(() => {
    setDark((prevMode) => !prevMode);
  }, []);

  return (
    <ThemeChangeContext.Provider value={{ isDark, toggleMode }}>
      <EmotionThemeProvider
        theme={isDark ? Themes.DarkTheme : Themes.LightTheme}
      >
        {children}
      </EmotionThemeProvider>
    </ThemeChangeContext.Provider>
  );
};

export default ThemeProvider;

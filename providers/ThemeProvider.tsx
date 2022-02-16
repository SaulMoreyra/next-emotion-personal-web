import { createContext, useState, useCallback, useEffect } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import Themes from "../theme";

type Props = {
  children: JSX.Element | JSX.Element[] | null;
};

export const ThemeChangeContext = createContext({
  isDark: false,
  toggleMode: () => {},
});

const ThemeProvider = ({ children }: Props) => {
  const [isDark, setDark] = useState(false);
  console.log(isDark);
  const toggleMode = useCallback(() => {
    setDark((prevMode) => !prevMode);
  }, []);

  return (
    <ThemeChangeContext.Provider
      value={{
        isDark,
        toggleMode,
      }}
    >
      <EmotionThemeProvider
        theme={isDark ? Themes.DarkTheme : Themes.LightTheme}
      >
        {children}
      </EmotionThemeProvider>
    </ThemeChangeContext.Provider>
  );
};

export default ThemeProvider;

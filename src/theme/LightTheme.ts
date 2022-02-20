import defaultTheme from "./DefaultTheme";

const theme = {
  ...defaultTheme,
  type: "light",
  isDark: false,
  primary: {
    main: "#D3FF52",
    light: "#E3FE9C",
    dark: "#B2D30B",
  },
  background: "#ffffff",
  text: {
    secondary: "#50514F",
    main: "#000000",
  },
};

export default theme;

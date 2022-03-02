import defaultTheme from "./DefaultTheme";

const theme = {
  ...defaultTheme,
  type: "dark",
  isDark: true,
  primary: {
    main: "#D3FF52",
    light: "#E3FE9C",
    dark: "#B2D30B",
    darker: "#B2D30B",
  },
  background: "#212121",
  text: {
    secondary: "#F2F2F2",
    main: "#FFFFFF",
  },
};

export default theme;

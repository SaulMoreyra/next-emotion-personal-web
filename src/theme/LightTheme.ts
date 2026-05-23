import defaultTheme from "./DefaultTheme";
import { typography, fonts } from "./typography";
import { media } from "./media";

const theme = {
  ...defaultTheme,
  type: "light",
  isDark: false,
  typography,
  fonts,
  media,
  primary: {
    main: "#C8F135",
    light: "#E3FE9C",
    dark: "#B5DC28",
    darker: "#9BC018",
    foreground: "#9BC018",
    muted: "rgba(200, 241, 53, 0.18)",
  },
  background: "#FAFAFA",
  surface: {
    default: "#FFFFFF",
    elevated: "#F5F5F5",
    border: "#E5E5E5",
  },
  text: {
    main: "#0A0A0A",
    secondary: "#525252",
    muted: "#737373",
  },
};

export default theme;

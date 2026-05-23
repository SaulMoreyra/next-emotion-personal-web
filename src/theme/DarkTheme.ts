import defaultTheme from "./DefaultTheme";
import { typography, fonts } from "./typography";
import { media } from "./media";

const theme = {
  ...defaultTheme,
  type: "dark",
  isDark: true,
  typography,
  fonts,
  media,
  primary: {
    main: "#C8F135",
    light: "#E3FE9C",
    dark: "#A8D020",
    darker: "#8FB018",
    foreground: "#C8F135",
    muted: "rgba(200, 241, 53, 0.14)",
  },
  background: "#0A0A0A",
  surface: {
    default: "#171717",
    elevated: "#262626",
    border: "#262626",
  },
  text: {
    main: "#FAFAFA",
    secondary: "#A3A3A3",
    muted: "#737373",
  },
};

export default theme;

const BASE_SPACING = 8;
const spacing = (...spaces: number[]) =>
  spaces.map((space) => `${space * BASE_SPACING}px`).join(" ");

export const fade = (hex: string, alpha = 1) => {
  if (!/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) throw new Error("Bad Hex Color");
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
};

const breakpoints = {
  in: "1px",
  sm: "576px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

const theme = {
  breakpoints,
  spacing,
  fade,
  black: "#0A0A0A",
  lightBlack: "#171717",
  white: "#FAFAFA",
  grey: "#737373",
  lightGrey: "#E5E5E5",
  border: "#262626",
  borderLight: "#E5E5E5",
};

export default theme;

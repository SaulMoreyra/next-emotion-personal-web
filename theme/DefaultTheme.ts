const BASE_SPACING = 8;
const spacing = (...spaces: number[]) =>
  spaces.map((space) => `${space * BASE_SPACING}px`).join(" ");

console.log(spacing(1, 3, 4, 3));

const breakpoints = {
  in: "1px",
  sm: "576px",
  md: "820px",
  lg: "1024px",
  xl: "1280px",
};

const theme = {
  breakpoints,
  spacing,
  black: "#000000",
  white: "#FFFFFF",
  grey: "#50514F",
};

export default theme;

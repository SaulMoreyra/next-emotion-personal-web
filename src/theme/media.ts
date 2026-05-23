import defaultTheme from "./DefaultTheme";

export const breakpoints = defaultTheme.breakpoints;

export const media = {
  up: (key: keyof typeof breakpoints) =>
    `@media (min-width: ${breakpoints[key]})`,
  down: (key: keyof typeof breakpoints) =>
    `@media (max-width: ${breakpoints[key]})`,
};

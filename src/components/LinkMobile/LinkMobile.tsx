import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { AnchorHTMLAttributes, ClassAttributes, ElementType } from "react";

type LinkStyledProps = {
  theme?: Theme;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    active?: boolean;
  };
const LinkMobile = styled.a(({ theme, active }: LinkStyledProps) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: theme?.spacing(7),
  textTransform: "capitalize",
  outline: "none",
  cursor: "pointer",
  borderLeft: `4px solid ${active ? theme?.primary.dark : "transparent"}`,
  backgroundColor: active ? theme?.primary.muted : "transparent",
  fontSize: theme?.spacing(2),
  fontWeight: active ? 700 : 500,
  letterSpacing: 1.5,
  color: theme?.isDark ? theme?.white : theme?.black,
  transition: "background-color 0.2s, border-color 0.2s",
  "&:hover": {
    backgroundColor: theme?.primary.muted,
    borderLeftColor: theme?.primary.dark,
  },
  "&:focus-visible": {
    outline: `2px solid ${theme?.primary.foreground}`,
    outlineOffset: "-2px",
  },
}));

export default LinkMobile;

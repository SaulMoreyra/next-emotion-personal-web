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
  borderLeft: `8px solid ${active ? theme?.primary.dark : "transparent"}`,
  fontSize: theme?.spacing(2),
  fontWeight: active ? 700 : 500,
  letterSpacing: 1.5,
  color: theme?.isDark ? theme?.white : theme?.black,
  transition: "0.3s",
  "&:hover": {
    borderLeft: `5px solid ${theme?.primary.dark}`,
  },
}));

export default LinkMobile;

import { CSSObject, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { AnchorHTMLAttributes, ClassAttributes, ElementType } from "react";

type LinkStyledProps = {
  theme?: Theme;
  as?: ElementType | undefined;
} & ClassAttributes<HTMLAnchorElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    active?: boolean;
  };

export const LinkStyled = styled.a(({ theme, active }: LinkStyledProps) => {
  const styles: CSSObject = {
    display: "inline-flex",
    alignItems: "center",
    height: theme?.spacing(5),
    outline: "none",
    cursor: "pointer",
    border: "none",
    background: "none",
    borderRadius: theme?.spacing(1),
    padding: theme?.spacing(1, 1.5),
    fontSize: theme?.typography.bodySm.fontSize,
    fontFamily: theme?.fonts.body,
    fontWeight: active ? 600 : 500,
    color: active ? theme?.primary.foreground : theme?.text.secondary,
    position: "relative",
    transition: "color 0.2s",
    "&:hover": {
      color: theme?.primary.foreground,
    },
    "&:focus-visible": {
      outline: `2px solid ${theme?.primary.foreground}`,
      outlineOffset: "2px",
    },
  };

  if (active) {
    styles["&::after"] = {
      content: '""',
      position: "absolute",
      left: theme?.spacing(1.5),
      right: theme?.spacing(1.5),
      bottom: "2px",
      height: "2px",
      backgroundColor: theme?.primary.dark,
      borderRadius: "2px",
    };
  }

  return styles;
});

export const SimpleLinkStyled = styled.a(({ theme }) => ({
  ...theme.typography.h3,
  fontFamily: theme.fonts.display,
  textDecoration: "none",
  cursor: "pointer",
  color: theme.primary.foreground,
  "&:hover": {
    color: theme.primary.dark,
    textDecoration: "underline",
  },
}));

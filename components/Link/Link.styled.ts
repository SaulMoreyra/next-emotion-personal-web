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
export const LinkStyled = styled.a(({ theme, active }: LinkStyledProps) => ({
  ...(active ? { backgroundColor: theme?.primary.main } : {}),
  textTransform: "uppercase",
  outline: "none",
  cursor: "pointer",
  border: "2px solid transparent",
  borderRadius: theme?.spacing(3),
  padding: theme?.spacing(1.5, 3),
  fontSize: theme?.spacing(2),
  fontWeight: active ? 700 : 600,
  letterSpacing: 1.5,
  color: active ? theme?.black : theme?.text.secondary,
  "&:hover": {
    border: `2px solid ${
      active
        ? theme?.isDark
          ? theme?.white
          : theme?.black
        : theme?.text.secondary
    }`,
  },
}));

import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes, ClassAttributes, ElementType } from "react";

type IconButtonProps = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    circular?: boolean;
  };

export const IconButtonStyled = styled.button(
  ({ theme, circular }: IconButtonProps) => ({
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: theme?.spacing(6.5),
    width: theme?.spacing(6.5),
    cursor: "pointer",
    borderRadius: circular ? theme?.spacing(5) : theme?.spacing(2),
  })
);

export const IconButtonPrimaryStyled = styled(IconButtonStyled)(
  ({ theme }) => ({
    background: theme.isDark ? "unset" : theme.white,
    border: `2px solid ${theme.isDark ? theme.primary.main : theme.black}`,
    "&:hover": {
      opacity: 0.9,
    },
  })
);

export const IconButtonSecondaryStyled = styled(IconButtonStyled)(
  ({ theme }) => ({
    background: theme.primary.main,
    border: "none",
    "&:hover": {
      background: theme.primary.dark,
    },
    "& > svg": {
      color: theme.black,
      stroke: theme.black,
    },
  })
);

import React from "react";
import { PrimaryButtonStyled, SecondaryButtonStyled } from "./Button.styled";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  type: "primary" | "secondary";
  endIcon?: (props: { color?: string }) => JSX.Element;
};

const Button = ({ type, children, endIcon: EndIcon }: Props) => {
  const Component =
    type === "primary" ? PrimaryButtonStyled : SecondaryButtonStyled;

  return (
    <Component>
      {children} {EndIcon && <EndIcon />}
    </Component>
  );
};

export default Button;

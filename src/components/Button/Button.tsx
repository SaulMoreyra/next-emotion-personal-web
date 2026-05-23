import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { PrimaryButtonStyled, SecondaryButtonStyled } from "./Button.styled";

type Props = {
  children: ReactNode;
  type: "primary" | "secondary";
  endIcon?: (props: { color?: string }) => JSX.Element;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">;

const Button = ({
  type,
  children,
  endIcon: EndIcon,
  onClick,
  ...props
}: Props) => {
  const Component =
    type === "primary" ? PrimaryButtonStyled : SecondaryButtonStyled;

  return (
    <Component type="button" onClick={onClick} {...props}>
      {children} {EndIcon && <EndIcon />}
    </Component>
  );
};

export default Button;

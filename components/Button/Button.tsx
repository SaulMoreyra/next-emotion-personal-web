import React from "react";
import { PrimaryButtonStyled, SecondaryButtonStyled } from "./Button.styled";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  type: "primary" | "secondary";
};

const Button = (props: Props) => {
  if (props.type === "primary")
    return <PrimaryButtonStyled>{props.children}</PrimaryButtonStyled>;

  return <SecondaryButtonStyled>{props.children}</SecondaryButtonStyled>;
};

export default Button;

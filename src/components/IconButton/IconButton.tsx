import React, { MouseEventHandler, ReactElement } from "react";
import { useTheme } from "@emotion/react";
import {
  IconButtonPrimaryStyled,
  IconButtonSecondaryStyled,
} from "./IconButton.styled";
import { IconProps } from "../../interfaces/Icons";

type Props = {
  icon: (iconProps: IconProps) => JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "primary" | "secondary";
};

const IconButton = ({ onClick, icon: Component, type = "primary" }: Props) => {
  const theme = useTheme();
  const Button =
    type === "primary" ? IconButtonPrimaryStyled : IconButtonSecondaryStyled;

  return (
    <Button onClick={onClick}>
      <Component
        color={theme.type === "dark" ? theme.primary.main : theme.grey}
      />
    </Button>
  );
};

export default IconButton;

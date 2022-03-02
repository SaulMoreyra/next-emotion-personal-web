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
  circular?: boolean;
};

const IconButton = ({
  onClick,
  icon: Component,
  type = "primary",
  circular = false,
}: Props) => {
  const theme = useTheme();
  const Button =
    type === "primary" ? IconButtonPrimaryStyled : IconButtonSecondaryStyled;

  return (
    <Button onClick={onClick} circular={circular}>
      <Component
        color={theme.type === "dark" ? theme.primary.main : theme.black}
      />
    </Button>
  );
};

export default IconButton;

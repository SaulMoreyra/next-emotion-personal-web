"use client";

import React, { MouseEventHandler, ReactElement } from "react";
import { useTheme } from "@emotion/react";
import {
  IconButtonPrimaryStyled,
  IconButtonSecondaryStyled,
} from "./IconButton.styled";
import { IconProps } from "../../interfaces/Icons";

type Props = {
  icon: (iconProps: IconProps) => ReactElement;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "primary" | "secondary";
  circular?: boolean;
  ariaLabel: string;
};

const IconButton = ({
  onClick,
  icon: Component,
  type = "primary",
  circular = false,
  ariaLabel,
}: Props) => {
  const theme = useTheme();
  const Button =
    type === "primary" ? IconButtonPrimaryStyled : IconButtonSecondaryStyled;

  return (
    <Button
      type="button"
      onClick={onClick}
      circular={circular}
      aria-label={ariaLabel}
    >
      <Component
        color={theme.type === "dark" ? theme.primary.main : theme.black}
      />
    </Button>
  );
};

export default IconButton;

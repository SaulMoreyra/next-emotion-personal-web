import React, { MouseEventHandler, ReactElement } from "react";
import { useTheme } from "@emotion/react";
import { IconButtonStyled } from "./IconButton.styled";
import { IconProps } from "../../interfaces/Icons";

type Props = {
  icon: (iconProps: IconProps) => JSX.Element;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const IconButton = ({ onClick, icon: Component }: Props) => {
  const theme = useTheme();

  return (
    <IconButtonStyled onClick={onClick}>
      <Component
        color={theme.type === "dark" ? theme.primary.main : theme.grey}
      />
    </IconButtonStyled>
  );
};

export default IconButton;

import { useTheme } from "@emotion/react";
import { IconProps } from "interfaces/Icons";
import React from "react";
import { IconContainer } from "./IconLink.styled";

type IconLinkProps = {
  icon: (iconProps: IconProps) => JSX.Element;
  href?: string;
  target?: string;
};

const IconLink = ({ icon: Icon, ...rest }: IconLinkProps) => {
  const theme = useTheme();
  const color = theme.isDark ? theme.primary.main : theme.grey;
  return (
    <IconContainer {...rest}>
      <Icon color={color} />
    </IconContainer>
  );
};

export default IconLink;

import React from "react";
import { LinkStyled } from "./Link.styled";

type Props = {
  children: string | JSX.Element;
  active?: boolean;
  onClick?: () => void;
};

const Link = ({ children, active, ...props }: Props) => {
  return (
    <LinkStyled active={active} {...props}>
      {children}
    </LinkStyled>
  );
};

export default Link;

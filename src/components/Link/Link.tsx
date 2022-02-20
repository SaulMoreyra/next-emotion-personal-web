import React from "react";
import { LinkStyled } from "./Link.styled";

type Props = {
  children: string | JSX.Element;
  active?: boolean;
};

const Link = ({ children, active }: Props) => {
  return <LinkStyled active={active}>{children}</LinkStyled>;
};

export default Link;

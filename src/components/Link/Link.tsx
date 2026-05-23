import React, { MouseEventHandler } from "react";
import { LinkStyled } from "./Link.styled";

type Props = {
  children: string | JSX.Element;
  href: string;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const Link = ({ children, active, href, onClick }: Props) => {
  return (
    <LinkStyled
      href={href}
      active={active}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
    >
      {children}
    </LinkStyled>
  );
};

export default Link;

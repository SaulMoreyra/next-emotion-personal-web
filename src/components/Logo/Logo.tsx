"use client";

import React, { MouseEventHandler } from "react";
import { ContainerLogo, SecondaryText, MainText } from "./Logo.styled";

type Props = {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  ariaLabel: string;
};

const Logo = ({ onClick, ariaLabel }: Props) => {
  return (
    <ContainerLogo href="#hero" onClick={onClick} aria-label={ariaLabel}>
      <MainText>Saul</MainText>
      <SecondaryText>Moreyra</SecondaryText>
    </ContainerLogo>
  );
};

export default Logo;

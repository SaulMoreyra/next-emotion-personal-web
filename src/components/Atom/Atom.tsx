import React from "react";
import { useTheme } from "@emotion/react";

import {
  AtomContainerStyled,
  SvgBaseContainer,
  SvgContainer,
} from "./Atom.styled";
import Nucleo from "../Icons/Nucleo";
import Atom1 from "../Icons/Atom1";
import Atom2 from "../Icons/Atom2";
import Atom3 from "../Icons/Atom3";

const Atom = () => {
  const theme = useTheme();
  return (
    <AtomContainerStyled>
      <SvgBaseContainer size={164}>
        <Nucleo />
      </SvgBaseContainer>

      <SvgContainer size={246} side="left" time={3}>
        <Atom1 color={theme.isDark ? theme.white : theme.black} />
      </SvgContainer>

      <SvgContainer size={328} side="right" time={9}>
        <Atom2 />
      </SvgContainer>

      <SvgContainer size={410} side="left" time={18}>
        <Atom3 color={theme.isDark ? theme.white : theme.black} />
      </SvgContainer>
    </AtomContainerStyled>
  );
};

export default Atom;

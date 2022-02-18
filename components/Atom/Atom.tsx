import React from "react";
import { useTheme } from "@emotion/react";

import {
  AtomContainerStyled,
  SvgBaseContainer,
  SvgContainer,
} from "./Atom.styled";
import Nucleo from "../../icons/Nucleo";
import Atom1 from "../../icons/Atom1";
import Atom2 from "../../icons/Atom2";
import Atom3 from "../../icons/Atom3";

const Atom = () => {
  const theme = useTheme();
  return (
    <AtomContainerStyled>
      <SvgBaseContainer>
        <Nucleo />
      </SvgBaseContainer>

      <SvgContainer side="left" time={5}>
        <Atom1 color={theme.isDark ? theme.white : theme.black} />
      </SvgContainer>

      <SvgContainer side="right" time={15}>
        <Atom2 />
      </SvgContainer>

      <SvgContainer side="left" time={25}>
        <Atom3 color={theme.isDark ? theme.white : theme.black} />
      </SvgContainer>
    </AtomContainerStyled>
  );
};

export default Atom;

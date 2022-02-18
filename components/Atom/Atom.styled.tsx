import styled from "@emotion/styled";
import { keyframes, Theme } from "@emotion/react";
import { ClassAttributes, ElementType, HTMLAttributes } from "react";

const spinRight = keyframes`
    from { transform: translate(50%,-50%) rotate(0deg); }
    to { transform: translate(50%,-50%) rotate(360deg); }
`;

const spinLeft = keyframes`
    from { transform: translate(50%,-50%) rotate(0deg); }
    to { transform: translate(50%,-50%) rotate(-360deg); }
`;

export const AtomContainerStyled = styled.div(({ theme }) => ({
  position: "relative",
}));

export const SvgBaseContainer = styled.div(({ theme }) => ({
  position: "absolute",
  top: "50%",
  right: "50%",
  transform: "translate(50%,-50%)",
}));

type SvgContainerType = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    side: "left" | "right";
    time: number;
  };

export const SvgContainer = styled(SvgBaseContainer)(
  ({ side, time }: SvgContainerType) => ({
    animation: `${
      side === "left" ? spinLeft : spinRight
    } infinite ${time}s linear`,
  })
);

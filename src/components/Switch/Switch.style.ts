import styled from "@emotion/styled";
import { Theme } from "@emotion/react";
import {
  ClassAttributes,
  ElementType,
  HTMLAttributes,
  LabelHTMLAttributes,
} from "react";

export const SwitchContainer = styled.div(({ theme }) => ({
  width: "100%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  border: "2px solid #000",
  borderRadius: theme.spacing(4),
  backgroundColor: theme.primary.main,
  height: "100%",
  cursor: "pointer",
}));

type LabelType = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLLabelElement> &
  LabelHTMLAttributes<HTMLLabelElement> & {
    selected: boolean;
  };

export const Label = styled.label(({ theme, selected }: LabelType) => ({
  fontWeight: 600,
  cursor: "pointer",
  zIndex: 3,
  color: theme?.isDark && selected ? theme.white : theme?.black,
}));

type SliderType = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & {
    selected: boolean;
  };

export const Slider = styled.div(({ theme, selected }: SliderType) => ({
  left: selected ? 0 : "50%",
  cursor: "pointer",
  borderRadius: theme?.spacing(4),
  position: "absolute",
  height: "100%",
  width: "50%",
  backgroundColor: theme?.background,
  transition: ".4s",
  border: `2px solid ${theme?.isDark ? theme.primary.main : theme?.background}`,
}));

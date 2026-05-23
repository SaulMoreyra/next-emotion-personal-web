import styled from "@emotion/styled";
import { Theme } from "@emotion/react";
import {
  ClassAttributes,
  ElementType,
  HTMLAttributes,
  LabelHTMLAttributes,
} from "react";

type SwitchSizeProps = { $compact?: boolean };

export const SwitchContainer = styled.div<SwitchSizeProps>(
  ({ theme, $compact }) => ({
    position: "relative" as const,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: $compact ? "88px" : "100%",
    height: $compact ? "36px" : "100%",
    minHeight: $compact ? "36px" : undefined,
    flexShrink: $compact ? 0 : undefined,
    padding: $compact ? "3px" : undefined,
    border: `1px solid ${theme.surface.border}`,
    borderRadius: $compact ? "999px" : theme.spacing(4),
    backgroundColor: theme.surface.default,
    cursor: "pointer",
    transition: "border-color 0.2s",
    "&:hover": {
      borderColor: theme.primary.main,
    },
  })
);

type LabelType = {
  theme?: Theme | undefined;
  as?: ElementType | undefined;
  $selected: boolean;
  $compact?: boolean;
} & ClassAttributes<HTMLLabelElement> &
  LabelHTMLAttributes<HTMLLabelElement>;

export const Label = styled.label(
  ({ theme, $selected, $compact }: LabelType) => ({
    fontFamily: theme?.fonts.body,
    fontSize: $compact ? "0.6875rem" : undefined,
    fontWeight: 600,
    cursor: "pointer",
    zIndex: 3,
    letterSpacing: $compact ? "0.04em" : undefined,
    color: $selected ? theme?.black : theme?.text.muted,
    transition: "color 0.2s",
  })
);

type SliderType = {
  theme?: Theme | undefined;
  as?: ElementType | undefined;
  $selected: boolean;
  $compact?: boolean;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement>;

export const Slider = styled.div(({ theme, $selected, $compact }: SliderType) => ({
  left: $selected ? ($compact ? "3px" : 0) : "50%",
  cursor: "pointer",
  borderRadius: $compact ? "999px" : theme?.spacing(4),
  position: "absolute" as const,
  top: $compact ? "3px" : 0,
  height: $compact ? "calc(100% - 6px)" : "100%",
  width: $compact ? "calc(50% - 4px)" : "50%",
  backgroundColor: theme?.isDark ? theme?.primary.main : theme?.primary.dark,
  transition: "left 0.25s ease",
  border: "none",
}));

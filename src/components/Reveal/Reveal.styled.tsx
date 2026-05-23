import styled from "@emotion/styled";

export const RevealContainer = styled.div<{
  visible: boolean;
  delay: number;
  $reduceMotion?: boolean;
}>(({ visible, delay, $reduceMotion }) => ({
  opacity: visible ? 1 : 0,
  transform: visible || $reduceMotion ? "translateY(0)" : "translateY(24px)",
  transition: $reduceMotion
    ? "none"
    : `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  willChange: $reduceMotion ? "auto" : "opacity, transform",
  height: "100%",
}));

import styled from "@emotion/styled";

const BaseButtonStyled = styled.button(({ theme }) => ({
  border: "none",
  cursor: "pointer",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.75, 3),
  fontSize: theme.typography.bodySm.fontSize,
  fontFamily: theme.fonts.body,
  fontWeight: 600,
  letterSpacing: "0.01em",
  height: theme.spacing(6),
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  transition: "opacity 0.2s, transform 0.2s, background-color 0.2s",
  "&:hover": {
    opacity: 0.9,
  },
  "&:active": {
    transform: "scale(0.98)",
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.primary.foreground}`,
    outlineOffset: "2px",
  },
}));

export const PrimaryButtonStyled = styled(BaseButtonStyled)(({ theme }) => ({
  backgroundColor: theme.isDark ? theme.primary.main : theme.primary.dark,
  color: theme.black,
  "&:hover": {
    backgroundColor: theme.isDark ? theme.primary.light : theme.primary.main,
    opacity: 1,
  },
  "& > svg > *": {
    fill: theme.black,
  },
}));

export const SecondaryButtonStyled = styled(BaseButtonStyled)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.text.main,
  border: `1px solid ${theme.surface.border}`,
  "&:hover": {
    borderColor: theme.primary.dark,
    color: theme.primary.foreground,
    backgroundColor: theme.primary.muted,
    opacity: 1,
  },
}));

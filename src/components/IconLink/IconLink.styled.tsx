import styled from "@emotion/styled";

export const IconContainer = styled.a(({ theme }) => ({
  border: `1px solid ${theme.isDark ? theme.surface.border : theme.primary.dark}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(5.5),
  height: theme.spacing(5.5),
  borderRadius: theme.spacing(1),
  cursor: "pointer",
  transition: "border-color 0.2s, background-color 0.2s",
  "&:hover": {
    borderColor: theme.primary.dark,
    backgroundColor: theme.primary.muted,
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.primary.foreground}`,
    outlineOffset: "2px",
  },
}));

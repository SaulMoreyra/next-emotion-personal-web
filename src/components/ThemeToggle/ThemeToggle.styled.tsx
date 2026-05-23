import styled from "@emotion/styled";

export const ToggleButton = styled.button(({ theme }) => ({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
  width: "72px",
  height: "36px",
  padding: "3px",
  borderRadius: "999px",
  border: `1px solid ${theme.surface.border}`,
  backgroundColor: theme.surface.default,
  cursor: "pointer",
  flexShrink: 0,
  transition: "border-color 0.2s",
  "&:hover": {
    borderColor: theme.primary.main,
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.primary.main}`,
    outlineOffset: "2px",
  },
}));

export const ToggleSlider = styled.div<{ $isDark: boolean }>(
  ({ theme, $isDark }) => ({
    position: "absolute" as const,
    top: "3px",
    left: $isDark ? "calc(50% + 1px)" : "3px",
    width: "calc(50% - 4px)",
    height: "calc(100% - 6px)",
    borderRadius: "999px",
    backgroundColor: theme.isDark ? theme.primary.main : theme.primary.dark,
    transition: "left 0.25s ease",
    pointerEvents: "none",
  })
);

export const ToggleIcon = styled.span<{ $active: boolean }>(
  ({ theme, $active }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    color: $active ? theme.black : theme.text.muted,
    transition: "color 0.2s",
  })
);

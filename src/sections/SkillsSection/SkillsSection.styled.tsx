import styled from "@emotion/styled";
import { media } from "theme/media";

export const SkillsWrap = styled.div(({ theme }) => ({
  backgroundColor: theme.isDark ? theme.surface.elevated : theme.surface.default,
  borderTop: `1px solid ${theme.surface.border}`,
  borderBottom: `1px solid ${theme.surface.border}`,
  marginLeft: -24,
  marginRight: -24,
  padding: theme.spacing(8, 3),
  [media.up("md")]: {
    marginLeft: -48,
    marginRight: -48,
    padding: theme.spacing(10, 6),
  },
}));

export const SkillsInner = styled.div({
  maxWidth: "1100px",
  margin: "0 auto",
});

export const SkillsGrid = styled.div(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(8),
}));

export const SkillChip = styled.span(({ theme }) => ({
  ...theme.typography.bodySm,
  fontFamily: theme.fonts.body,
  fontWeight: 500,
  color: theme.text.main,
  padding: theme.spacing(1, 2),
  borderRadius: "999px",
  backgroundColor: theme.background,
  border: `1px dashed ${theme.surface.border}`,
  transition: "border-color 0.2s, background-color 0.2s, border-style 0.2s",
  "&:hover": {
    borderStyle: "solid",
    borderColor: theme.primary.dark,
    backgroundColor: theme.primary.muted,
  },
}));

export const LanguagesRow = styled.div(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: theme.spacing(3),
  paddingTop: theme.spacing(2),
}));

export const LanguageItem = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
  gap: theme.spacing(1.5),
}));

export const LanguageDivider = styled.span(({ theme }) => ({
  color: theme.surface.border,
  userSelect: "none",
  [media.down("sm")]: {
    display: "none",
  },
}));

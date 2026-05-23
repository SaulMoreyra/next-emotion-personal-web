import styled from "@emotion/styled";
import { Section } from "components/Section";
import { media } from "theme/media";

export const HeroSection = styled(Section)({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  paddingTop: "120px",
  paddingBottom: "80px",
});

export const HeroInner = styled.div({
  maxWidth: "1100px",
  margin: "0 auto",
  width: "100%",
  position: "relative",
});

export const HeroLayout = styled.div(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(5),
  alignItems: "center",
  [media.up("md")]: {
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gap: theme.spacing(6),
  },
}));

export const HeroContent = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2.5),
  maxWidth: "720px",
}));

export const HeroVisual = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  order: -1,
  [media.up("md")]: {
    order: 1,
  },
}));

export const HeroMeta = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  flexWrap: "wrap",
}));

export const StatusBadge = styled.span(({ theme }) => ({
  ...theme.typography.overline,
  fontFamily: theme.fonts.body,
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(1),
  width: "fit-content",
  padding: theme.spacing(0.75, 2),
  borderRadius: "999px",
  backgroundColor: theme.primary.muted,
  color: theme.primary.foreground,
  border: `1px solid ${theme.isDark ? theme.primary.dark : theme.primary.dark}`,
  "&::before": {
    content: '""',
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: theme.primary.dark,
  },
}));

export const HeroActions = styled.div(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

export const SocialRow = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(3),
}));

export const ScrollHint = styled.button(({ theme }) => ({
  position: "absolute",
  right: 0,
  bottom: 0,
  background: "none",
  border: `1px solid ${theme.surface.border}`,
  borderRadius: "50%",
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: theme.text.secondary,
  transition: "border-color 0.2s, color 0.2s",
  "&:hover": {
    borderColor: theme.primary.dark,
    color: theme.primary.foreground,
  },
  [media.down("md")]: {
    display: "none",
  },
}));

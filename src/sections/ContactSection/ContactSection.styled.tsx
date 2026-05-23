import styled from "@emotion/styled";
import { media } from "theme/media";

export const ContactBanner = styled.div(({ theme }) => ({
  backgroundColor: theme.isDark ? theme.surface.elevated : theme.black,
  color: theme.isDark ? theme.text.main : theme.white,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(6, 5),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  [media.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(8, 7),
  },
}));

export const ContactCopy = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
  maxWidth: "520px",
}));

export const ContactTitle = styled.h3(({ theme }) => ({
  ...theme.typography.h2,
  fontFamily: theme.fonts.display,
  color: "inherit",
  margin: 0,
}));

export const ContactDescription = styled.p(({ theme }) => ({
  ...theme.typography.body,
  fontFamily: theme.fonts.body,
  color: theme.isDark ? theme.text.secondary : "rgba(255,255,255,0.72)",
  margin: 0,
}));

export const ContactLinks = styled.div(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1.5),
}));

export const SocialButton = styled.a(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(6),
  height: theme.spacing(6),
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.isDark ? theme.surface.border : "rgba(255,255,255,0.2)"}`,
  color: theme.isDark ? theme.primary.foreground : theme.primary.main,
  transition: "border-color 0.2s, background-color 0.2s, transform 0.2s",
  "&:hover": {
    borderColor: theme.primary.main,
    backgroundColor: theme.isDark
      ? theme.primary.muted
      : "rgba(200, 241, 53, 0.12)",
    transform: "translateY(-2px)",
  },
  "&:focus-visible": {
    outline: `2px solid ${theme.primary.main}`,
    outlineOffset: "2px",
  },
}));

export const AvailabilityNote = styled.p(({ theme }) => ({
  ...theme.typography.caption,
  fontFamily: theme.fonts.body,
  color: theme.text.muted,
  marginTop: theme.spacing(4),
  textAlign: "center",
}));

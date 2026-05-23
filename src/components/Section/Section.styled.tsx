import styled from "@emotion/styled";
import { media } from "theme/media";

export const Section = styled.section({
  scrollMarginTop: "80px",
  padding: "96px 24px",
  [media.up("md")]: {
    padding: "120px 48px",
  },
});

export const SectionInner = styled.div({
  maxWidth: "1100px",
  margin: "0 auto",
  width: "100%",
});

export const SectionHeader = styled.div(({ theme }) => ({
  marginBottom: theme.spacing(8),
  [media.up("md")]: {
    marginBottom: theme.spacing(10),
  },
}));

export const SectionLabel = styled.span(({ theme }) => ({
  ...theme.typography.overline,
  fontFamily: theme.fonts.body,
  color: theme.primary.foreground,
  display: "block",
  marginBottom: theme.spacing(1.5),
}));

export const SectionTitle = styled.h2(({ theme }) => ({
  ...theme.typography.h1,
  fontFamily: theme.fonts.display,
  color: theme.text.main,
  margin: 0,
}));

export const SectionDescription = styled.p(({ theme }) => ({
  ...theme.typography.body,
  fontFamily: theme.fonts.body,
  color: theme.text.secondary,
  marginTop: theme.spacing(2),
  maxWidth: "60ch",
}));

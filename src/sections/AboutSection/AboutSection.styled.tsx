import styled from "@emotion/styled";
import { media } from "theme/media";

export const AboutLayout = styled.div(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(6),
  [media.up("md")]: {
    gridTemplateColumns: "1.4fr 1fr",
    gap: theme.spacing(10),
    alignItems: "start",
  },
}));

export const BioPanel = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  paddingLeft: theme.spacing(3),
  borderLeft: `3px solid ${theme.primary.main}`,
}));

export const BioLabel = styled.span(({ theme }) => ({
  ...theme.typography.overline,
  fontFamily: theme.fonts.body,
  color: theme.primary.foreground,
}));

export const SideStack = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
}));

export const EducationBlock = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  paddingBottom: theme.spacing(5),
  borderBottom: `1px solid ${theme.surface.border}`,
}));

export const EducationLabel = styled.span(({ theme }) => ({
  ...theme.typography.caption,
  fontFamily: theme.fonts.body,
  color: theme.text.muted,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontWeight: 600,
}));

export const AwardsBlock = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const AwardsLabel = styled(EducationLabel)({});

export const AwardList = styled.ul(({ theme }) => ({
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: 0,
}));

export const AwardItem = styled.li(({ theme }) => ({
  ...theme.typography.bodySm,
  fontFamily: theme.fonts.body,
  color: theme.text.secondary,
  padding: theme.spacing(2, 0),
  borderBottom: `1px solid ${theme.surface.border}`,
  "&:last-of-type": {
    borderBottom: "none",
    paddingBottom: 0,
  },
}));

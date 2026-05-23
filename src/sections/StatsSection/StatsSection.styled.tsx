import styled from "@emotion/styled";
import { media } from "theme/media";

export const StatsBand = styled.section(({ theme }) => ({
  backgroundColor: theme.primary.main,
  color: theme.black,
  padding: theme.spacing(4, 3),
  [media.up("md")]: {
    padding: theme.spacing(5, 3),
  },
}));

export const StatsGrid = styled.div({
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "24px",
  [media.up("md")]: {
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "32px",
  },
});

export const StatItem = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  textAlign: "center",
  [media.up("md")]: {
    textAlign: "left",
  },
});

export const StatValue = styled.span(({ theme }) => ({
  ...theme.typography.h2,
  fontFamily: theme.fonts.display,
  color: theme.black,
  lineHeight: 1.1,
}));

export const StatLabel = styled.span(({ theme }) => ({
  ...theme.typography.bodySm,
  fontFamily: theme.fonts.body,
  color: "rgba(0,0,0,0.65)",
}));

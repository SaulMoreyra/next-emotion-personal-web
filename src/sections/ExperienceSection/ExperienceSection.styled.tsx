import styled from "@emotion/styled";
import { media } from "theme/media";

export const Timeline = styled.div(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const TimelineLine = styled.div(({ theme }) => ({
  position: "absolute",
  left: "11px",
  top: "6px",
  bottom: "6px",
  width: "2px",
  backgroundColor: theme.surface.border,
  pointerEvents: "none",
  [media.up("md")]: {
    left: "15px",
  },
}));

export const TimelineItem = styled.div(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "24px 1fr",
  gap: theme.spacing(3),
  alignItems: "start",
  [media.up("md")]: {
    gridTemplateColumns: "32px 1fr",
    gap: theme.spacing(4),
  },
}));

export const TimelineMarker = styled.div<{ $highlight?: boolean }>(
  ({ theme, $highlight }) => ({
    width: $highlight ? "14px" : "10px",
    height: $highlight ? "14px" : "10px",
    borderRadius: "50%",
    backgroundColor: $highlight ? theme.black : theme.primary.dark,
    marginTop: theme.spacing($highlight ? 2.5 : 1.5),
    justifySelf: "center",
    position: "relative",
    zIndex: 1,
    boxShadow: `0 0 0 3px ${theme.background}`,
    flexShrink: 0,
  })
);

export const TimelineContent = styled.div<{ $highlight?: boolean }>(
  ({ theme, $highlight }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
    padding: $highlight ? theme.spacing(5) : theme.spacing(3, 0, 4),
    ...($highlight
      ? {
          borderRadius: theme.spacing(2),
          backgroundColor: theme.primary.main,
          color: theme.black,
          marginBottom: theme.spacing(2),
        }
      : {
          borderBottom: `1px solid ${theme.surface.border}`,
        }),
  })
);

export const CompanyRow = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: theme.spacing(2),
  flexWrap: "wrap",
}));

export const CompanyIdentity = styled.div(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  minWidth: 0,
}));

export const CompanyLogo = styled.span<{ $highlight?: boolean }>(
  ({ theme, $highlight }) => ({
    ...theme.typography.caption,
    fontFamily: theme.fonts.display,
    fontWeight: 700,
    flexShrink: 0,
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "0.02em",
    ...($highlight
      ? {
          backgroundColor: "rgba(0,0,0,0.12)",
          color: theme.black,
          border: "1px solid rgba(0,0,0,0.15)",
        }
      : {
          backgroundColor: theme.primary.muted,
          color: theme.primary.foreground,
          border: `1px solid ${theme.isDark ? theme.surface.border : theme.primary.dark}`,
        }),
  })
);

export const ExpandActions = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(4),
}));

export const PeriodBadge = styled.span<{ $highlight?: boolean }>(
  ({ theme, $highlight }) => ({
    ...theme.typography.caption,
    fontFamily: theme.fonts.body,
    color: $highlight ? "rgba(0,0,0,0.55)" : theme.text.muted,
    whiteSpace: "nowrap",
  })
);

export const RoleList = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const RoleItem = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.25),
  [media.up("sm")]: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: theme.spacing(2),
  },
}));

export const HighlightLink = styled.a(({ theme }) => ({
  ...theme.typography.h3,
  fontFamily: theme.fonts.display,
  color: theme.black,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const HighlightText = styled.div<{ $muted?: boolean }>(
  ({ theme, $muted }) => ({
    ...($muted ? theme.typography.caption : theme.typography.body),
    fontFamily: theme.fonts.body,
    color: $muted ? "rgba(0,0,0,0.55)" : theme.black,
    margin: 0,
  })
);

export const HighlightSubtitle = styled.h3(({ theme }) => ({
  ...theme.typography.h2,
  fontFamily: theme.fonts.display,
  color: theme.black,
  margin: 0,
}));

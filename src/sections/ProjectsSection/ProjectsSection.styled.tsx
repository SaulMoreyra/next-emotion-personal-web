import styled from "@emotion/styled";
import { media } from "theme/media";

export const ProjectsGrid = styled.div(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(3),
  [media.up("md")]: {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gridAutoRows: "minmax(180px, auto)",
  },
}));

export const ProjectCard = styled.article<{ $featured?: boolean }>(
  ({ theme, $featured }) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    transition: "transform 0.2s",
    ...($featured
      ? {
          gridColumn: "1 / -1",
          backgroundColor: theme.primary.main,
          color: theme.black,
          borderRadius: theme.spacing(2),
          padding: theme.spacing(5, 6),
          [media.up("md")]: {
            flexDirection: "row",
            alignItems: "flex-start",
            gap: theme.spacing(6),
          },
        }
      : {
          padding: theme.spacing(3, 0),
          borderBottom: `1px solid ${theme.surface.border}`,
          "&:hover": {
            borderColor: theme.primary.dark,
          },
        }),
  })
);

export const FeaturedBody = styled.div(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const FeaturedMeta = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  alignItems: "flex-start",
}));

export const FeaturedLayout = styled.div(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(4),
  alignItems: "center",
  width: "100%",
  [media.up("md")]: {
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gap: theme.spacing(6),
  },
}));

export const FeaturedContent = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

export const FeaturedPreview = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  [media.up("md")]: {
    justifyContent: "flex-end",
  },
}));

export const FeaturedLabel = styled.span(({ theme }) => ({
  ...theme.typography.overline,
  fontFamily: theme.fonts.body,
  color: "rgba(0,0,0,0.55)",
}));

export const FeaturedTitle = styled.h3(({ theme }) => ({
  ...theme.typography.h1,
  fontFamily: theme.fonts.display,
  color: theme.black,
  margin: 0,
}));

export const FeaturedDescription = styled.p(({ theme }) => ({
  ...theme.typography.body,
  fontFamily: theme.fonts.body,
  color: theme.black,
  margin: 0,
  maxWidth: "60ch",
}));

export const StackList = styled.div(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  marginTop: "auto",
}));

export const StackChip = styled.span<{ $featured?: boolean }>(
  ({ theme, $featured }) => ({
    ...theme.typography.caption,
    fontFamily: theme.fonts.body,
    padding: theme.spacing(0.5, 1.5),
    borderRadius: "999px",
    ...($featured
      ? {
          color: theme.black,
          backgroundColor: "rgba(0,0,0,0.08)",
          border: "1px solid rgba(0,0,0,0.12)",
        }
      : {
          color: theme.primary.foreground,
          backgroundColor: theme.primary.muted,
          border: `1px solid ${theme.isDark ? theme.surface.border : theme.primary.dark}`,
        }),
  })
);

export const ProjectLinks = styled.div(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  marginTop: theme.spacing(1),
}));

export const FeaturedLink = styled.a(({ theme }) => ({
  ...theme.typography.bodySm,
  fontFamily: theme.fonts.body,
  fontWeight: 600,
  color: theme.black,
  textDecoration: "underline",
  textUnderlineOffset: "3px",
}));

export const CompactIndex = styled.span(({ theme }) => ({
  ...theme.typography.caption,
  fontFamily: theme.fonts.body,
  color: theme.text.muted,
  fontVariantNumeric: "tabular-nums",
}));

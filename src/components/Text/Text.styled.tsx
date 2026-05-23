import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ClassAttributes, ElementType, HTMLAttributes } from "react";
import { media } from "theme/media";

type TextType = { align?: "center" | "left" | "right" };

type TextGlobalType = {
  theme?: Theme | undefined;
  as?: ElementType | undefined;
} & ClassAttributes<HTMLHeadingElement | HTMLParagraphElement> &
  HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> &
  TextType;

export const Display = styled.h1(({ theme, align }: TextGlobalType) => ({
  ...(align ? { textAlign: align } : {}),
  ...theme?.typography.display,
  fontFamily: theme?.fonts.display,
  color: theme?.text.main,
  margin: 0,
}));

export const Title = styled.h1(({ theme, align }: TextGlobalType) => ({
  ...(align ? { textAlign: align } : {}),
  ...theme?.typography.h1,
  fontFamily: theme?.fonts.display,
  color: theme?.text.main,
  margin: 0,
}));

export const Subtitle = styled.h2(({ theme, align }: TextGlobalType) => ({
  ...(align ? { textAlign: align } : {}),
  ...theme?.typography.h2,
  fontFamily: theme?.fonts.display,
  color: theme?.primary.foreground,
  margin: 0,
}));

export const Body = styled.p(({ theme, align }: TextGlobalType) => ({
  ...(align ? { textAlign: align } : {}),
  ...theme?.typography.body,
  fontFamily: theme?.fonts.body,
  color: theme?.text.secondary,
  margin: 0,
  maxWidth: "65ch",
  [media.down("sm")]: {
    ...theme?.typography.bodySm,
  },
}));

export const Caption = styled.span(({ theme, align }: TextGlobalType) => ({
  ...(align ? { textAlign: align } : {}),
  ...theme?.typography.caption,
  fontFamily: theme?.fonts.body,
  color: theme?.text.muted,
  margin: 0,
}));

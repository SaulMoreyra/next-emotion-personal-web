import styled from "@emotion/styled";
import { media } from "theme/media";

export const ProfileFrame = styled.div(({ theme }) => ({
  position: "relative",
  width: "240px",
  height: "240px",
  margin: "0 auto",
  [media.up("md")]: {
    width: "320px",
    height: "320px",
    margin: 0,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: theme.spacing(3),
    objectFit: "cover",
    position: "relative",
    zIndex: 1,
  },
}));

export const ProfileGlow = styled.div(({ theme }) => ({
  position: "absolute",
  inset: "-12px",
  borderRadius: theme.spacing(3.5),
  background: `linear-gradient(135deg, ${theme.primary.main} 0%, transparent 60%)`,
  opacity: 0.35,
  zIndex: 0,
}));

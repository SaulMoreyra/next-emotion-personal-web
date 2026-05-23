import styled from "@emotion/styled";
import { media } from "theme/media";

export const MockupWrap = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

export const PhoneBezel = styled.div(({ theme }) => ({
  width: "220px",
  flexShrink: 0,
  borderRadius: "32px",
  padding: "10px",
  backgroundColor: "#0A0A0A",
  border: "2px solid rgba(0,0,0,0.25)",
  boxShadow: "0 28px 56px rgba(0,0,0,0.22)",
  [media.up("md")]: {
    width: "280px",
  },
  [media.up("lg")]: {
    width: "300px",
  },
}));

export const PhoneScreen = styled.div({
  borderRadius: "24px",
  overflow: "hidden",
  aspectRatio: "472 / 1024",
  backgroundColor: "#F5F5F5",
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top center",
    display: "block",
  },
});

import styled from "@emotion/styled";

export const PhoneMockup = styled.div(({ theme }) => ({
  width: "160px",
  flexShrink: 0,
  borderRadius: "28px",
  padding: "10px",
  backgroundColor: "#0A0A0A",
  border: "2px solid rgba(0,0,0,0.2)",
  boxShadow: "0 24px 48px rgba(0,0,0,0.18)",
}));

export const PhoneScreen = styled.div({
  borderRadius: "20px",
  overflow: "hidden",
  aspectRatio: "9 / 19",
  background: "linear-gradient(180deg, #C8F135 0%, #9BC018 35%, #0A0A0A 35%)",
  display: "flex",
  flexDirection: "column",
  padding: "16px 12px",
  gap: "8px",
});

export const PhoneStatusBar = styled.div({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "8px",
  fontWeight: 600,
  color: "#0A0A0A",
});

export const PhoneCard = styled.div({
  marginTop: "auto",
  borderRadius: "12px",
  backgroundColor: "rgba(255,255,255,0.92)",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

export const PhoneCardLine = styled.div<{ $wide?: boolean }>(({ $wide }) => ({
  height: "6px",
  borderRadius: "999px",
  backgroundColor: "rgba(10,10,10,0.12)",
  width: $wide ? "70%" : "45%",
}));

export const PhoneCardAccent = styled.div({
  height: "24px",
  borderRadius: "8px",
  backgroundColor: "#C8F135",
});

export const MockupWrap = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

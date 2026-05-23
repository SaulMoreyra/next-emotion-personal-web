import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A0A0A",
          color: "#FAFAFA",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            background: "#C8F135",
            marginBottom: "32px",
          }}
        />
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Saúl Moreyra
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "#C8F135",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          Senior Software Engineer · Tech Lead
        </div>
        <div style={{ fontSize: "24px", color: "#A3A3A3", maxWidth: "800px" }}>
          React · Node · Next.js · TypeScript · Go
        </div>
      </div>
    ),
    { ...size }
  );
}

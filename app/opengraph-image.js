import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "#12151B",
          color: "#EFEBE2",
        }}
      >
        <div style={{ fontSize: 28, color: "#C9A227", fontFamily: "monospace", marginBottom: 20 }}>
          Data & ML Engineering
        </div>
        <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.15, maxWidth: 900 }}>
          I build systems that turn messy, real-world data into decisions.
        </div>
        <div style={{ fontSize: 28, color: "#8A8F9B", marginTop: 30 }}>Galib</div>
      </div>
    ),
    { ...size }
  );
}

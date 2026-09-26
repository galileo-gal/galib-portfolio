import { ImageResponse } from "next/og";
import { projects } from "../../../lib/projects";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  const title = project?.title ?? "Project";
  const tag = project?.tag ?? "";
  const summary = project?.summary ?? "";

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
        <div style={{ fontSize: 26, color: "#C9A227", fontFamily: "monospace", marginBottom: 24 }}>
          {tag}
        </div>
        <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.1 }}>{title}</div>
        <div style={{ fontSize: 26, color: "#8A8F9B", marginTop: 28, maxWidth: 880 }}>{summary}</div>
        <div style={{ fontSize: 24, color: "#8A8F9B", marginTop: 50 }}>Galib — Portfolio</div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";

export const runtime = "nodejs";
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
          padding: 80,
          background: "#080828",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#F85800",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Grocto
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          Food & fruits delivery
        </div>
        <div style={{ marginTop: 20, fontSize: 28, color: "#F4EDE6" }}>
          By Pick & Drop Services · Bathinda, Punjab
        </div>
      </div>
    ),
    size,
  );
}

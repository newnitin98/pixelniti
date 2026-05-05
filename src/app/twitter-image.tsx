import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "PixelNiti — Websites, Apps and AI Agents Built with Strategy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#080d1a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: "linear-gradient(90deg, #4f46e5 0%, #8b5cf6 50%, #6366f1 100%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "5px",
            background: "linear-gradient(180deg, #6366f1 0%, #4f46e5 100%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "96px",
                height: "96px",
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "52px",
                  fontWeight: 900,
                  color: "white",
                  lineHeight: 1,
                }}
              >
                P
              </span>
            </div>
            <span
              style={{
                fontSize: "80px",
                fontWeight: 800,
                color: "#e2e8f0",
                lineHeight: 1,
              }}
            >
              PixelNiti
            </span>
          </div>

          <div
            style={{
              fontSize: "30px",
              color: "#94a3b8",
              textAlign: "center",
              marginBottom: "52px",
              width: "720px",
              lineHeight: 1.45,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            Websites, Apps &amp; AI Agents Built with Strategy
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              marginBottom: "60px",
            }}
          >
            {["Web Development", "AI Agents", "Automation", "Strategy-First"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    padding: "12px 28px",
                    background: "rgba(99,102,241,0.12)",
                    border: "1px solid rgba(99,102,241,0.30)",
                    borderRadius: "100px",
                    color: "#818cf8",
                    fontSize: "18px",
                    fontWeight: 600,
                    display: "flex",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>

          <div
            style={{
              color: "#475569",
              fontSize: "22px",
              display: "flex",
            }}
          >
            pixelniti.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

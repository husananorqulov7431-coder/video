import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface CodeWindowProps {
  filename: string;
  code: string;
  language?: string;
  highlightLine?: number;
}

export const CodeWindow: React.FC<CodeWindowProps> = ({
  filename,
  code,
  language = "yaml",
  highlightLine
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 15 }
  });

  const scale = interpolate(entrance, [0, 1], [0.94, 1]);
  const opacity = interpolate(entrance, [0, 1], [0, 1]);

  const lines = code.trim().split("\n");

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: "rgba(18, 24, 38, 0.95)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(99, 102, 241, 0.2)",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        width: "100%",
        maxWidth: "920px"
      }}
    >
      {/* Top Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 18px",
          background: "rgba(10, 14, 23, 0.9)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#eab308" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
        </div>
        <div style={{ color: "#94a3b8", fontSize: "14px", fontWeight: 500 }}>
          {filename}
        </div>
        <div style={{ color: "#64748b", fontSize: "12px", textTransform: "uppercase" }}>
          {language}
        </div>
      </div>

      {/* Code Area */}
      <div style={{ padding: "20px 24px", overflowX: "auto", fontSize: "16px", lineHeight: "1.6" }}>
        {lines.map((line, idx) => {
          const lineNum = idx + 1;
          const isHighlighted = highlightLine === lineNum;

          return (
            <div
              key={idx}
              style={{
                display: "flex",
                background: isHighlighted ? "rgba(99, 102, 241, 0.15)" : "transparent",
                borderLeft: isHighlighted ? "3px solid #6366f1" : "3px solid transparent",
                padding: "2px 8px"
              }}
            >
              <span
                style={{
                  width: "36px",
                  color: "#475569",
                  userSelect: "none",
                  textAlign: "right",
                  paddingRight: "16px"
                }}
              >
                {lineNum}
              </span>
              <span style={{ color: isHighlighted ? "#a5b4fc" : "#e2e8f0", whiteSpace: "pre" }}>
                {line}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

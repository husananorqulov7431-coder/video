import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface TerminalWindowProps {
  title?: string;
  commands: { prompt?: string; text: string; output?: string[]; isError?: boolean }[];
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title = "antigravity ~ agy cli",
  commands
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 16 }
  });

  const scale = interpolate(entrance, [0, 1], [0.95, 1]);
  const opacity = interpolate(entrance, [0, 1], [0, 1]);

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        background: "rgba(10, 14, 26, 0.96)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px rgba(56, 189, 248, 0.15)",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        width: "100%",
        maxWidth: "920px"
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 18px",
          background: "rgba(5, 8, 16, 0.9)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
        }}
      >
        <div style={{ display: "flex", gap: "8px" }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#eab308" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#22c55e" }} />
        </div>
        <div style={{ color: "#94a3b8", fontSize: "14px", fontWeight: 500 }}>
          {title}
        </div>
        <div style={{ color: "#38bdf8", fontSize: "12px", fontWeight: 600 }}>
          ACTIVE
        </div>
      </div>

      {/* Terminal Content */}
      <div style={{ padding: "20px 24px", fontSize: "15px", lineHeight: "1.7" }}>
        {commands.map((cmd, idx) => (
          <div key={idx} style={{ marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: "#10b981", fontWeight: 700 }}>
                {cmd.prompt || "agy>"}
              </span>
              <span style={{ color: "#f8fafc", fontWeight: 600 }}>
                {cmd.text}
              </span>
            </div>

            {cmd.output && cmd.output.length > 0 && (
              <div
                style={{
                  marginTop: "8px",
                  paddingLeft: "24px",
                  color: cmd.isError ? "#f87171" : "#94a3b8",
                  borderLeft: "2px solid rgba(255, 255, 255, 0.1)"
                }}
              >
                {cmd.output.map((out, outIdx) => (
                  <div key={outIdx} style={{ whiteSpace: "pre-wrap" }}>
                    {out}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

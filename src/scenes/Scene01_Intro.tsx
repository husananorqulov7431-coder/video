import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ParticleBackground } from "../components/ParticleBackground.js";
import { SubtitleOverlay } from "../components/SubtitleOverlay.js";

export const Scene01_Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({ frame, fps, config: { damping: 14 } });
  const scale = interpolate(titleSpring, [0, 1], [0.85, 1]);
  const opacity = interpolate(titleSpring, [0, 1], [0, 1]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden"
      }}
    >
      <ParticleBackground />

      {/* Main Title Area */}
      <div
        style={{
          transform: `scale(${scale})`,
          opacity,
          textAlign: "center",
          zIndex: 10,
          maxWidth: "1100px",
          padding: "0 40px"
        }}
      >
        <div
          style={{
            display: "inline-block",
            fontSize: "14px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "#38bdf8",
            background: "rgba(56, 189, 248, 0.12)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            padding: "8px 22px",
            borderRadius: "30px",
            marginBottom: "28px"
          }}
        >
          Google DeepMind • Agentic Coding Revolution
        </div>

        <h1
          style={{
            fontSize: "76px",
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            margin: "0 0 24px 0",
            background: "linear-gradient(135deg, #ffffff 30%, #a855f7 70%, #38bdf8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          GOOGLE ANTIGRAVITY
        </h1>

        <p
          style={{
            fontSize: "28px",
            lineHeight: 1.5,
            color: "#94a3b8",
            margin: "0 auto 40px auto",
            maxWidth: "850px"
          }}
        >
          Avtonom AI-Dasturchi Sherik Bilan Dasturlashning Yangi Davri
        </p>

        {/* Feature Pill Tags */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          {["Full Autonomous Agent", "IDE + CLI + App", "Subagents Swarm", "Custom Skills & MCP"].map((badge, i) => (
            <div
              key={i}
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#e2e8f0",
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(10px)",
                padding: "10px 20px",
                borderRadius: "12px"
              }}
            >
              ✦ {badge}
            </div>
          ))}
        </div>
      </div>

      <SubtitleOverlay text="Assalomu alaykum! Google DeepMind tomonidan yaratilgan Antigravity platformasi masterklassiga xush kelibsiz!" />
    </div>
  );
};

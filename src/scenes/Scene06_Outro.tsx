import React from "react";
import { ParticleBackground } from "../components/ParticleBackground";
import { SubtitleOverlay } from "../components/SubtitleOverlay";

export const Scene06_Outro: React.FC = () => {
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
        overflow: "hidden",
        padding: "0 80px"
      }}
    >
      <ParticleBackground />

      <div style={{ zIndex: 10, textAlign: "center", maxWidth: "900px" }}>
        <div
          style={{
            fontSize: "14px",
            fontWeight: 700,
            color: "#10b981",
            textTransform: "uppercase",
            letterSpacing: "3px",
            marginBottom: "16px"
          }}
        >
          Xulosa & Resurslar
        </div>

        <h2
          style={{
            fontSize: "58px",
            fontWeight: 900,
            letterSpacing: "-1px",
            margin: "0 0 24px 0",
            background: "linear-gradient(135deg, #ffffff 40%, #10b981 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Kelajak Dasturlashiga Xush Kelibsiz!
        </h2>

        <p style={{ fontSize: "22px", lineHeight: "1.6", color: "#94a3b8", marginBottom: "40px" }}>
          Antigravity bilan dasturchi o'z unumdorligini 10 barobargacha oshira oladi.
          Barcha manba kodlari, ssenariy va Custom Skill quyidagi havolada ochiq:
        </p>

        <div
          style={{
            display: "inline-block",
            fontSize: "20px",
            fontWeight: 700,
            color: "#f8fafc",
            background: "rgba(99, 102, 241, 0.2)",
            border: "1px solid rgba(99, 102, 241, 0.4)",
            padding: "16px 36px",
            borderRadius: "40px",
            boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
          }}
        >
          github.com/google-antigravity
        </div>
      </div>

      <SubtitleOverlay text="Video foydali bo'lgan bo'lsa, layk bosing va kanalga obuna bo'lishni unutmang. Yangi darslarda ko'rishguncha!" />
    </div>
  );
};

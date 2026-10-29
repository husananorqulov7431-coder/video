import React from "react";
import { ParticleBackground } from "../components/ParticleBackground";
import { SubtitleOverlay } from "../components/SubtitleOverlay";
import { FeatureCard } from "../components/FeatureCard";

export const Scene02_Surfaces: React.FC = () => {
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

      <div style={{ zIndex: 10, textAlign: "center", marginBottom: "50px" }}>
        <div
          style={{
            fontSize: "14px",
            fontWeight: 700,
            color: "#a855f7",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "10px"
          }}
        >
          Ekosistema & Interfeyslar
        </div>
        <h2 style={{ fontSize: "50px", fontWeight: 800, margin: 0 }}>
          Antigravity-ning Uchta Asosiy Yuzi
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          gap: "28px",
          width: "100%",
          maxWidth: "1280px",
          zIndex: 10
        }}
      >
        <FeatureCard
          title="1. Antigravity IDE"
          badge="VS Code Core"
          color="#38bdf8"
          delayFrames={0}
          description="Sun'iy intellekt birinchi o'ringa qo'yilgan to'liq muhit. Autocomplete, Supercomplete (Tab bilan blokli kod), Ctrl+I inline refactoring va CodeLens."
        />

        <FeatureCard
          title="2. Antigravity 2.0"
          badge="Desktop App"
          color="#a855f7"
          delayFrames={15}
          description="Parallel mustaqil ish stoli dasturi. Markazda Chat Canvas va o'ngda Auxiliary Pane: Subagentlar, Background Tasks, interaktiv Artifacts va fayllar."
        />

        <FeatureCard
          title="3. Antigravity CLI"
          badge="agy Terminal"
          color="#10b981"
          delayFrames={30}
          description="Terminalni sevuvchilar va serverlar uchun tezyurar TUI interfeysi. Klaviaturadan qo'lni uzmasdan minimal resurs bilan agentni to'liq boshqarish."
        />
      </div>

      <SubtitleOverlay text="Antigravity 3 ta mustaqil interfeysga ega: IDE, Desktop App 2.0 va tezyurar CLI ('agy')." />
    </div>
  );
};

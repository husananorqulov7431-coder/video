import React from "react";
import { ParticleBackground } from "../components/ParticleBackground";
import { SubtitleOverlay } from "../components/SubtitleOverlay";
import { FeatureCard } from "../components/FeatureCard";

export const Scene04_Customization: React.FC = () => {
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

      <div style={{ zIndex: 10, textAlign: "center", marginBottom: "40px" }}>
        <div
          style={{
            fontSize: "14px",
            fontWeight: 700,
            color: "#10b981",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "10px"
          }}
        >
          Moslashuvchanlik & Kengaytirish
        </div>
        <h2 style={{ fontSize: "48px", fontWeight: 800, margin: 0 }}>
          Customization: Skills, Rules, MCP va Sidecars
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "24px",
          width: "100%",
          maxWidth: "1100px",
          zIndex: 10
        }}
      >
        <FeatureCard
          title="Rules (.gemini/rules)"
          badge="Buzilmas Qonunlar"
          color="#ef4444"
          delayFrames={0}
          description="Agent hech qachon chetlab o'tishi mumkin bo'lmagan xavfsizlik va arxitektura qoidalari (masalan, bazani himoya qilish, kodlash standartlari)."
        />

        <FeatureCard
          title="Skills (SKILL.md)"
          badge="Yangi Mutaxassislik"
          color="#38bdf8"
          delayFrames={10}
          description="Agentga yangi bilimlar, triggerlar, maxsus ko'rsatmalar va yordamchi skriptlar berish. Masalan, API tahlilchi yoki test generatori."
        />

        <FeatureCard
          title="MCP (Context Protocol)"
          badge="Tashqi Tizimlar"
          color="#a855f7"
          delayFrames={20}
          description="Ochiq standart orqali agentni ma'lumotlar bazasi, GitHub, Chrome brauzeri va maxsus API serverlarga xavfsiz ulash."
        />

        <FeatureCard
          title="Sidecars"
          badge="Interaktiv Panellar"
          color="#10b981"
          delayFrames={30}
          description="Antigravity ichida ochiladigan vizual darchalar: 3D molekulalar, Android qurilmasini boshqarish yoki Jetpack Compose preview."
        />
      </div>

      <SubtitleOverlay text="Rules, Skills, MCP va Sidecars orqali Antigravity-ni o'z jamoangiz yoki loyihangiz talablariga to'liq moslashtirasiz." />
    </div>
  );
};
